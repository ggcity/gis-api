# @author Rachot Moragraan

require 'sinatra'
require 'pg'
require 'json'
require 'yaml'

configure do
end

before do
  # Read connection credentials
  creds = YAML.load_file('secrets.yml')

  pg_host = creds['PG_HOST']
  pg_port = creds['PG_PORT']
  pg_db = creds['PG_DB']
  pg_user = creds['PG_USER']
  pg_pass = creds['PG_PASS']

  # Open a connection before any request
  @db = PG.connect( host: pg_host, port: pg_port, dbname: pg_db, user: pg_user, password: pg_pass )
  content_type 'application/json'
end

after do
  # Close connection after every request
  @db.finish
end

=begin
  @api {get} /addresses/search /addresses/search
  @apiDescription General address search
  @apiName GetAddressesSearch
  @apiGroup Addresses
  @apiVersion 1.0.0

  @apiParam {String} q 
    This is the address search query. If this does not contain any partial street 
    name, this returns empty array.

    Requires a minimum string length of 4 characters.
    
    Eg: \
    12345 Euclid \
    12000 Euclid OR 12 Euclid (block search, all 12xxx addresses on Euclid) \
    10052 Em (partial street name search)

  @apiParam {Number} [limit=20]
    Maximum return results. Upper hard limit is 20 no matter what
    this value is set to.
 
  @apiSuccess {Object[]} addresses Result of search in an array of JSON objects
  @apiSuccess {Number}   addresses.id Internal address id. This is unique across all Garden Grove applications.
  @apiSuccess {String}   addresses.address Human readable address string that matches the search
  @apiSuccess {String}   addresses.zip_code Zip code
  @apiSuccess {String}   addresses.zip_4 Plus 4
  @apiSuccess {String}   addresses.city City code abbreviation
  @apiSuccess {String}   addresses.unit Unit number, if applicable
  @apiSuccess {String}   addresses.floor Floor number, if applicable
  @apiSuccess {String}   addresses.unit_designator As specified by USPS (APT, SPC, UNIT, etc)
  @apiSuccess {String}   addresses.building_name Building name for complex address
  @apiSuccess {Boolean}  addresses.is_mailable If this is a USPS mailable address
  @apiSuccess {Number}   addresses.longitude SRID 4326
  @apiSuccess {Number}   addresses.latitude SRID 4326

  @apiSampleRequest /addresses/search
=end
get '/addresses/search' do
  q = params[:q]
  limit = params[:limit]

  sql = <<-SQL
    SELECT
      a.id,
      gfa.name AS address,
      a.zip_code,
      a.zip_4,
      a.city,
      a.unit,
      a.floor,
      a.unit_designator,
      a.building_name,
      a.is_mailable,
      ST_X(ST_Transform(a.geom, 4326))::numeric(9,6) AS longitude,
      ST_Y(ST_Transform(a.geom, 4326))::numeric(9,6) AS latitude
    FROM gg_find_address($1) gfa
    JOIN public.addresses a ON a.id = gfa.key
    LIMIT $2
  SQL

  limit = (limit && limit.to_i < 20) ? limit : 20

  res = []
  @db.exec_params(sql, [ q, limit ]).each{ |r| res << r }
  { addresses: res }.to_json
end

=begin
  @api {get} /addresses/info /addresses/info
  @apiDescription General address info
  @apiName GetAddressesInfo
  @apiGroup Addresses
  @apiVersion 1.0.0

  @apiParam {String} q 
    This is the address search query. If this does not contain any partial street 
    name, this returns empty array.

    Requires a minimum string length of 4 characters.
    
    Eg: \
    12345 Euclid \
    12000 Euclid OR 12 Euclid (block search, all 12xxx addresses on Euclid) \
    10052 Em (partial street name search)

  @apiSuccess {Object[]} addresses Result of search in an array of JSON objects
  @apiSuccess {Number}   addresses.id Internal address id. This is unique across all Garden Grove applications.
  @apiSuccess {String}   addresses.address Human readable address string that matches the search
  @apiSuccess {String}   addresses.city This is an alias field for postal_city
  @apiSuccess {String}   addresses.postal_city City name as it appears in USPS database
  @apiSuccess {String}   addresses.jurisdiction The actually entity that is responsible for this address
  @apiSuccess {String}   addresses.zip_code Zip code
  @apiSuccess {String}   addresses.pd_district Police district address spatially intersects
  @apiSuccess {Number}   addresses.fd_district Fire district address spatially intersects
  @apiSuccess {Number}   addresses.council_district Council district address spatially intersects
  @apiSuccess {String}   addresses.council_member Council Member representing the given address
  @apiSuccess {String}   addresses.parcel_atlas_sheet Legacy parcel sheet address spatially intersects
  @apiSuccess {String}   addresses.code_enforcement_officer Code enforcement officer assigned to address 
  @apiSuccess {String}   addresses.census_tract Census tract address spatially intersects
  @apiSuccess {String}   addresses.college_district Community college district address spatially intersects
  @apiSuccess {String}   addresses.elementary_school_district Elementary school district address spatially intersects
  @apiSuccess {Boolean}  addresses.in_sfha Boolean noting if address is within a FEMA special flood hazard area
  @apiSuccess {String}   addresses.sfha_zone FEMA special flood hazard area address spatially intersects
  @apiSuccess {String}   addresses.high_school_district High school district address spatially intersects
  @apiSuccess {String}   addresses.parcel_apn Parcel APN id address spatially intersects
  @apiSuccess {String}   addresses.unified_school_district Unified school district address spatially intersects
  @apiSuccess {String}   addresses.nearest_fire_station Closest Garden Grove fire station to address
  @apiSuccess {String}   addresses.cdbg_zone Community Development Block Grant address spatially intersects
  @apiSuccess {String}   addresses.land_use_designation General Plan land use designation address spatially intersects
  @apiSuccess {String}   addresses.redevelopment_zone Redevelopment zone address spatially intersects
  @apiSuccess {String}   addresses.zoning_zone Planning zone address spatially intersects
  @apiSuccess {String}   addresses.zoning_designation Planning zone designation address spatially intersects
  @apiSuccess {String}   addresses.street_sweeping_days Days of month street sweeping occurs at address
  @apiSuccess {String}   addresses.trash_pickup_day Day of week trash pickup occurs at address
  @apiSuccess {String}   addresses.state_assembly_district CA State Assembly district address spatially intersects
  @apiSuccess {String}   addresses.state_congressional_district CA State Congressional district address spatially intersects
  @apiSuccess {String}   addresses.state_senate_district CA State Senate district address spatially intersects
  @apiSuccess {String}   addresses.nearest_park Nearest city park to address
  @apiSuccess {Number}   addresses.longitude SRID 4326
  @apiSuccess {Number}   addresses.latitude SRID 4326

  @apiSampleRequest /addresses/info
=end
get '/addresses/info' do
  q = params[:q]

  sql = <<-SQL
    SELECT
      a.address_id,
      a.address,
      a.postal_city as city,
      a.postal_city,
      a.jurisdiction,
      a.zip_code,
      a.pd_district,
      a.fd_district,
      a.council_district,
      a.council_member,
      a.parcel_atlas_sheet,
      a.code_enforcement_officer,
      a.census_tract,
      a.college_district,
      a.elementary_school_district,
      a.in_sfha,
      a.sfha_zone,
      a.high_school_district,
      a.parcel_apn,
      a.unified_school_district,
      a.nearest_fire_station,
      a.cdbg_zone,
      a.land_use_designation,
      a.redevelopment_zone,
      a.zoning_zone,
      a.zoning_designation,
      a.street_sweeping_days,
      a.trash_pickup_day,
      a.state_assembly_district,
      a.state_congressional_district,
      a.state_senate_district,
      np.nearest_park,
      ST_X(ST_Transform(a.geom, 4326))::numeric(9,6) AS longitude,
      ST_Y(ST_Transform(a.geom, 4326))::numeric(9,6) AS latitude
    FROM gg_find_address($1) gfa
    JOIN gis.city_addresses ca ON ca.id = gfa.key
    LEFT JOIN gis_city.addresses_spatial_joins a ON a.address_id = gfa.key
    LEFT JOIN gis_city.addresses_nearest_park np ON np.address_id = gfa.key
    LIMIT 1

  SQL

  results = @db.exec_params(sql, [ q ])
  if results.num_tuples == 0 then
    return {}.to_json
  else 
    return results[0].to_json
  end
end


=begin
  @api {get} /cities/spatial_search /cities/spatial_search
  @apiDescription City + Lat/Lng spatial query
  @apiName GetCitiesSearch
  @apiGroup Cities 
  @apiVersion 1.0.0

  @apiParam {Number} lat 
    This is the latitude for a spatial query against the city boundaries of Orange County, CA. 

    The number must be in decimal degree format. If the point does not intersect the county boundaries, this returns an empty array.
    
    Eg: 33.768091 

  @apiParam {Number} lng 
    This is the longitude for a spatial query against the city boundaries of Orange County, CA. 

    The number must be in decimal degree format. If the point does not intersect the county boundaries, this returns an empty array.
    
    Eg: -117.913565

  @apiSuccess {Object[]} cities Result of search in an array of JSON objects
  @apiSuccess {String}   cities.in_city Name of city point intersects with
  @apiSuccess {String}   cities.nearest_city Name of city closest to point
  @apiSuccess {Number}   cities.distance_to_boundary Distance to the nearest city from point

  @apiSampleRequest /cities/spatial_search
=end

get '/cities/spatial_search' do
  q = params[:q]
  lng = params[:lng]

  sql = <<-SQL
    with point as (select gis.create_point_geom($2::numeric(11,8), $1::numeric(11,8)) as geom),
    within as (select c.name from gis_county.city_boundaries c join point p on st_intersects(c.geom, p.geom)),
    nearest as (select cb.name, st_distance(p.geom, cb.geom) as distance 
        from gis_county.city_boundaries cb, point p
        where st_distance(p.geom, cb.geom) > 0)
    select initcap(w.name) as in_city,
      initcap(n.name) as nearest_city,
      n.distance::numeric(10, 2) as distance_to_boundary
    from within w, nearest n
    order by n.distance
    limit 1;
  SQL

  res = []
  @db.exec_params(sql, [lat, lng]).each{ |r| res << r }
  { cities: res }.to_json
end

=begin
  @api {get} /locations/suggest /locations/suggest
  @apiDescription 
    Suggests known, valid Garden Grove addresses or intersections.
    Usually used in a typedown, autocomplete text box to help entering
    addresses.
  @apiName GetLocationsSuggest
  @apiGroup Locations
  @apiVersion 1.0.0

  @apiParam {String} q 
    This is the location search query. Addresses and intersections can be searched.

    Requires a minimum string length of 4 characters.
    
    Eg: \
    12345 Euclid \
    12000 Euclid OR 12 Euclid (block search, all 12xxx addresses on Euclid) \
    10052 Em (partial street name search)\
    Euclid / Garden Grove \
    Garden Grove / Euclid

  @apiParam {Number} [limit=20]
    Maximum return results. Upper hard limit is 20 no matter what
    this value is set to.

  @apiSuccess {Object[]} locations Result of search in an array of JSON objects
  @apiSuccess {Number}   locations.id Unique internal ID for this location
  @apiSuccess {String}   locations.name Pretty print name of this location
  @apiSuccess {Number}   addresses.longitude SRID 4326
  @apiSuccess {Number}   addresses.latitude SRID 4326

  @apiSampleRequest /locations/suggest
=end

get '/locations/suggest' do
  q = params[:q]
  limit = params[:limit]

  sql = <<-SQL
    SELECT
      gfl.key AS id,
      gfl.name AS name,
      ST_X(ST_Transform(COALESCE(a.geom, i.geom), 4326)) AS longitude,
      ST_Y(ST_Transform(COALESCE(a.geom, i.geom), 4326)) AS latitude
    FROM gg_find_location($1) gfl
    LEFT JOIN public.addresses a ON a.id = gfl.key
    LEFT JOIN public.intersections i ON i.id = gfl.key
    WHERE COALESCE(a.geom, i.geom) IS NOT NULL
    ORDER BY id
    LIMIT $2
  SQL

  limit = (limit && limit.to_i < 20) ? limit : 20

  res = []
  @db.exec_params(sql, [ q, limit ]).each{ |r| res << r }
  res.to_json
end
