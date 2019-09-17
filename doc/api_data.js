define({ "api": [
  {
    "type": "get",
    "url": "/addresses/info",
    "title": "/addresses/info",
    "description": "<p>Returns most information we have about an address.</p>",
    "name": "GetAddressesInfo",
    "group": "Addresses",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Address ID. eg: 65606</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>Full address. You may omit street suffix if there's no ambiguity (ACACIA PKWY or ACACIA AVE).</p> <p>Requires a minimum string length of 4 characters. Returns one and only one result even if there are multiple matches.</p> <p>If id parameter is specified, this parameter is ignored.</p> <p>Eg: <br> 12345 Euclid <br> 11222 Acacia Pkwy</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Internal address id. This is unique across all Garden Grove applications.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Human readable address string that matches the search</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>This is an alias field for postal_city</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "postal_city",
            "description": "<p>City name as it appears in USPS database</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>The actually entity that is responsible for this address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zip_code",
            "description": "<p>Zip code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pd_district",
            "description": "<p>Police district address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "fd_district",
            "description": "<p>Fire district address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "council_district",
            "description": "<p>Council district address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "council_member",
            "description": "<p>Council Member representing the given address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parcel_atlas_sheet",
            "description": "<p>Legacy parcel sheet address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code_enforcement_officer",
            "description": "<p>Code enforcement officer assigned to address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "census_tract",
            "description": "<p>Census tract address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "college_district",
            "description": "<p>Community college district address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "elementary_school_district",
            "description": "<p>Elementary school district address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "in_sfha",
            "description": "<p>Boolean noting if address is within a FEMA special flood hazard area</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sfha_zone",
            "description": "<p>FEMA special flood hazard area address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "high_school_district",
            "description": "<p>High school district address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parcel_apn",
            "description": "<p>Parcel APN id address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unified_school_district",
            "description": "<p>Unified school district address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nearest_fire_station",
            "description": "<p>Closest Garden Grove fire station to address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cdbg_zone",
            "description": "<p>Community Development Block Grant address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "land_use_designation",
            "description": "<p>General Plan land use designation address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "redevelopment_zone",
            "description": "<p>Redevelopment zone address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zoning_zone",
            "description": "<p>Planning zone address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zoning_designation",
            "description": "<p>Planning zone designation address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "street_sweeping_days",
            "description": "<p>Days of month street sweeping occurs at address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "trash_pickup_day",
            "description": "<p>Day of week trash pickup occurs at address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state_assembly_district",
            "description": "<p>CA State Assembly district address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state_congressional_district",
            "description": "<p>CA State Congressional district address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state_senate_district",
            "description": "<p>CA State Senate district address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nearest_park",
            "description": "<p>Nearest city park to address</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>SRID 4326</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>SRID 4326</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://ggcity.org/maps/api/addresses/info"
      }
    ],
    "filename": "./api.rb",
    "groupTitle": "Addresses"
  },
  {
    "type": "get",
    "url": "/addresses/search",
    "title": "/addresses/search",
    "description": "<p>General address search</p>",
    "name": "GetAddressesSearch",
    "group": "Addresses",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>This is the address search query. If this does not contain any partial street name, this returns empty array.</p> <p>Requires a minimum string length of 4 characters.</p> <p>Eg: <br> 12345 Euclid <br> 12000 Euclid OR 12 Euclid (block search, all 12xxx addresses on Euclid) <br> 10052 Em (partial street name search)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>Maximum return results. Upper hard limit is 20 no matter what this value is set to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "addresses",
            "description": "<p>Result of search in an array of JSON objects</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "addresses.id",
            "description": "<p>Internal address id. This is unique across all Garden Grove applications.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.address",
            "description": "<p>Human readable address string that matches the search</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.zip_code",
            "description": "<p>Zip code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.zip_4",
            "description": "<p>Plus 4</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.city",
            "description": "<p>City code abbreviation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.unit",
            "description": "<p>Unit number, if applicable</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.floor",
            "description": "<p>Floor number, if applicable</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.unit_designator",
            "description": "<p>As specified by USPS (APT, SPC, UNIT, etc)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.building_name",
            "description": "<p>Building name for complex address</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "addresses.is_mailable",
            "description": "<p>If this is a USPS mailable address</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "addresses.longitude",
            "description": "<p>SRID 4326</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "addresses.latitude",
            "description": "<p>SRID 4326</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://ggcity.org/maps/api/addresses/search"
      }
    ],
    "filename": "./api.rb",
    "groupTitle": "Addresses"
  },
  {
    "type": "get",
    "url": "/cities/spatial_search",
    "title": "/cities/spatial_search",
    "description": "<p>City + Lat/Lng spatial query</p>",
    "name": "GetCitiesSearch",
    "group": "Cities",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lat",
            "description": "<p>This is the latitude for a spatial query against the city boundaries of Orange County, CA.</p> <p>The number must be in decimal degree format. If the point does not intersect the county boundaries, this returns an empty array.</p> <p>Eg: 33.768091</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lng",
            "description": "<p>This is the longitude for a spatial query against the city boundaries of Orange County, CA.</p> <p>The number must be in decimal degree format. If the point does not intersect the county boundaries, this returns an empty array.</p> <p>Eg: -117.913565</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "cities",
            "description": "<p>Result of search in an array of JSON objects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cities.in_city",
            "description": "<p>Name of city point intersects with</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cities.nearest_city",
            "description": "<p>Name of city closest to point</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cities.distance_to_boundary",
            "description": "<p>Distance to the nearest city from point</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://ggcity.org/maps/api/cities/spatial_search"
      }
    ],
    "filename": "./api.rb",
    "groupTitle": "Cities"
  },
  {
    "type": "get",
    "url": "/locations/suggest",
    "title": "/locations/suggest",
    "description": "<p>Suggests known, valid Garden Grove addresses or intersections. Usually used in a typedown, autocomplete text box to help entering addresses.</p>",
    "name": "GetLocationsSuggest",
    "group": "Locations",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>This is the location search query. Addresses and intersections can be searched.</p> <p>Requires a minimum string length of 4 characters.</p> <p>Eg: <br> 12345 Euclid <br> 12000 Euclid OR 12 Euclid (block search, all 12xxx addresses on Euclid) <br> 10052 Em (partial street name search)<br> Euclid / Garden Grove <br> Garden Grove / Euclid</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>Maximum return results. Upper hard limit is 20 no matter what this value is set to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "locations",
            "description": "<p>Result of search in an array of JSON objects</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "locations.id",
            "description": "<p>Unique internal ID for this location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "locations.name",
            "description": "<p>Pretty print name of this location</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "addresses.longitude",
            "description": "<p>SRID 4326</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "addresses.latitude",
            "description": "<p>SRID 4326</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://ggcity.org/maps/api/locations/suggest"
      }
    ],
    "filename": "./api.rb",
    "groupTitle": "Locations"
  },
  {
    "type": "get",
    "url": "/parcels/info",
    "title": "/parcels/info",
    "description": "<p>Returns information we have that spatially intersects a parcel.</p>",
    "name": "GetParcelsInfo",
    "group": "Parcels",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>Parcel APN.</p> <p>Requires a minimum string length of 8 characters. Returns one and only one result even if there are multiple matches.</p> <p>Eg: <br> 09016442 <br> 090-164-42</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parcel_apn",
            "description": "<p>Parcel Number defined by Orange County</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "approximate_address",
            "description": "<p>Human readable address string (returns just one of potentially many addresses)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "postal_city",
            "description": "<p>City name as it appears in USPS database</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jurisdiction",
            "description": "<p>Agency in which parcel physically exists</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zip_code",
            "description": "<p>Zip code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pd_district",
            "description": "<p>Police district parcel spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "council_district",
            "description": "<p>Council district parcel spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "council_member",
            "description": "<p>Council Member representing the given parcel</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parcel_atlas_sheet",
            "description": "<p>Legacy parcel sheet parcel spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code_enforcement_officer",
            "description": "<p>Code enforcement officer assigned to parcel</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "census_tract",
            "description": "<p>Census tract parcel spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "college_district",
            "description": "<p>Community college district parcel spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "elementary_school_district",
            "description": "<p>Elementary school district parcel spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "in_sfha",
            "description": "<p>Boolean noting if parcel is within a FEMA special flood hazard area</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sfha_zone",
            "description": "<p>FEMA special flood hazard area parcel spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "high_school_district",
            "description": "<p>High school district parcel spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unified_school_district",
            "description": "<p>Unified school district address spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "land_use_designation",
            "description": "<p>General Plan land use designation parcel centroid spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zoning_zone",
            "description": "<p>Planning zone parcel_centroid spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zoning_designation",
            "description": "<p>Planning zone designation parcel centroid spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state_assembly_district",
            "description": "<p>CA State Assembly district parcel spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state_congressional_district",
            "description": "<p>CA State Congressional district parcel spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state_senate_district",
            "description": "<p>CA State Senate district parcel spatially intersects</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>SRID 4326</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>SRID 4326</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bounding_box",
            "description": "<p>Extents of parcel geometry. SRID 4326</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://ggcity.org/maps/api/parcels/info"
      }
    ],
    "filename": "./api.rb",
    "groupTitle": "Parcels"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_josephs_workspace_docker_gis_api_doc_main_js",
    "groupTitle": "_home_josephs_workspace_docker_gis_api_doc_main_js",
    "name": ""
  }
] });
