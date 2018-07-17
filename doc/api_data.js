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
        "url": "https://www.ci.garden-grove.ca.us/maps/api/addresses/search"
      }
    ],
    "filename": "./api.rb",
    "groupTitle": "Addresses"
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
    "group": "_var_www_html_api_doc_main_js",
    "groupTitle": "_var_www_html_api_doc_main_js",
    "name": ""
  }
] });
