define({ "api": [
  {
    "type": "get",
    "url": "/addresses/:id",
    "title": "/addresses/:id",
    "description": "<p>Get address details from an address id</p>",
    "name": "GetAddressID",
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
            "description": "<p>Address ID</p>"
          }
        ]
      }
    },
    "filename": "./api.rb",
    "groupTitle": "Addresses"
  },
  {
    "type": "get",
    "url": "/addresses/info",
    "title": "/addresses/info",
    "description": "<p>General address info</p>",
    "name": "GetAddressesInfo",
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
            "field": "addresses.city",
            "description": "<p>City code abbreviation</p>"
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
            "field": "addresses.pd_district",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "addresses.fd_district",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "addresses.council_district",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.parcel_atlas_sheet",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.code_enforcement_officer",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.census_tract",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.college_district",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.elementary_school_district",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "addresses.in_sfha",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.sfha_zone",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.high_school_district",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.parcel_apn",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.unified_school_district",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.nearest_fire_station",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.cdbg_zone",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.land_use_designation",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.redevelopment_zone",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.zoning_zone",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.zoning_designation",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.street_sweeping_days",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.trash_pickup_day",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.state_assembly_district",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.state_congressional_district",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.state_senate_district",
            "description": "<p>TEST</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.nearest_park",
            "description": "<p>TEST</p>"
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
    "group": "_srv_containers_api_doc_main_js",
    "groupTitle": "_srv_containers_api_doc_main_js",
    "name": ""
  }
] });
