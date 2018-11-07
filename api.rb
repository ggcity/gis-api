# @author Rachot Moragraan

require 'sinatra'
require 'pg'
require 'json'

configure do
end

before do
  # Open a connection before any request
  @db = PG.connect( host: 'pgquery', dbname: 'city', user: 'gis', password: 'gis' )
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
      zip_code,
      zip_4,
      city,
      unit,
      floor,
      unit_designator,
      building_name,
      is_mailable,
      ST_X(ST_Transform(geom, 4326)) AS longitude,
      ST_Y(ST_Transform(geom, 4326)) AS latitude
    FROM gg_find_address($1) gfa
    JOIN addresses a ON a.id = gfa.key
    LIMIT $2
  SQL

  limit = (limit && limit.to_i < 20) ? limit : 20

  res = []
  @db.exec_params(sql, [ q, limit ]).each{ |r| res << r }
  { addresses: res }.to_json
end

=begin
  @api {get} /addresses/:id /addresses/:id
  @apiDescription Get address details from an address id
  @apiName GetAddressID
  @apiGroup Addresses
  @apiVersion 1.0.0

  @apiParam {Number} id Address ID

  @apiSampleRequest off
=end
get '/addresses/:id' do
  sql = <<-SQL
    SELECT
      a.id,
      gfa.name AS address,
      zip_code,
      zip_4,
      city,
      unit,
      floor,
      unit_designator,
      building_name,
      is_mailable,
      ST_X(ST_Transform(geom, 4326)) AS longitude,
      ST_Y(ST_Transform(geom, 4326)) AS latitude
    FROM addresses a ON a.id = gfa.key
  SQL
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
  lat = params[:lat]
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
