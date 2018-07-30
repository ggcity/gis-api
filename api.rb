# @author Rachot Moragraan

require 'sinatra'
require 'pg'
require 'json'

configure do
end

before do
  # Open a connection before any request
  @db = PG.connect( host: 'localhost', port: '25432', dbname: 'city', user: 'gis', password: 'gis' )
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
      ST_X(ST_Transform(a.geom, 4326)) AS longitude,
      ST_Y(ST_Transform(a.geom, 4326)) AS latitude
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
  @apiSuccess {String}   addresses.city City code abbreviation
  @apiSuccess {String}   addresses.zip_code Zip code
  @apiSuccess {String}   addresses.pd_district TEST
  @apiSuccess {Number}   addresses.fd_district TEST
  @apiSuccess {Number}   addresses.council_district TEST
  @apiSuccess {String}   addresses.parcel_atlas_sheet TEST
  @apiSuccess {String}   addresses.code_enforcement_officer TEST
  @apiSuccess {String}   addresses.census_tract TEST
  @apiSuccess {String}   addresses.college_district TEST
  @apiSuccess {String}   addresses.elementary_school_district TEST
  @apiSuccess {Boolean}  addresses.in_sfha TEST
  @apiSuccess {String}   addresses.sfha_zone TEST
  @apiSuccess {String}   addresses.high_school_district TEST
  @apiSuccess {String}   addresses.parcel_apn TEST
  @apiSuccess {String}   addresses.unified_school_district TEST
  @apiSuccess {String}   addresses.nearest_fire_station TEST
  @apiSuccess {String}   addresses.cdbg_zone TEST
  @apiSuccess {String}   addresses.land_use_designation TEST
  @apiSuccess {String}   addresses.redevelopment_zone TEST
  @apiSuccess {String}   addresses.zoning_zone TEST
  @apiSuccess {String}   addresses.zoning_designation TEST
  @apiSuccess {String}   addresses.street_sweeping_days TEST
  @apiSuccess {String}   addresses.trash_pickup_day TEST
  @apiSuccess {String}   addresses.state_assembly_district TEST
  @apiSuccess {String}   addresses.state_congressional_district TEST
  @apiSuccess {String}   addresses.state_senate_district TEST
  @apiSuccess {String}   addresses.nearest_park TEST
  @apiSuccess {Number}   addresses.longitude SRID 4326
  @apiSuccess {Number}   addresses.latitude SRID 4326

  @apiSampleRequest /addresses/info
=end
get '/addresses/info' do
  q = params[:q]

  sql = <<-SQL
    SELECT
      a.address_id,
      gfa.name AS address,
      a.city,
      a.zip_code,
      a.pd_district,
      a.fd_district,
      a.council_district,
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
      ST_X(ST_Transform(a.geom, 4326)) AS longitude,
      ST_Y(ST_Transform(a.geom, 4326)) AS latitude
    FROM gg_find_address($1) gfa
    JOIN gis_city.addresses_spatial_joins a on a.address_id = gfa.key
    JOIN gis_city.addresses_nearest_park np on np.address_id = gfa.key
    LIMIT 1

  SQL

  res = []
  @db.exec_params(sql, [ q ]).each{ |r| res << r }
  { address: res }.to_json
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
      a.zip_code,
      a.zip_4,
      a.city,
      a.unit,
      a.floor,
      a.unit_designator,
      a.building_name,
      a.is_mailable,
      ST_X(ST_Transform(a.geom, 4326)) AS longitude,
      ST_Y(ST_Transform(a.geom, 4326)) AS latitude
    FROM public.addresses a ON a.id = gfa.key
  SQL
end
