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
        "url": "https://www.ci.garden-grove.ca.us/maps/api/addresses/info"
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
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.3.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission.</p> <p>An &quot;apiDefinePermission&quot;-block can have an &quot;apiVersion&quot;, so you can attach the block to a specific version.</p>"
      }
    ],
    "description": "<p>Compare Verison 0.3.0 with 0.2.0 and you will see the green markers with new items in version 0.3.0 and red markers with removed items since 0.2.0.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/user/4711",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "registered",
            "description": "<p>Registration Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "nicknames",
            "description": "<p>List of Users nicknames (Array of Strings).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>Profile data (example for an Object)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "profile.age",
            "description": "<p>Users age.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.image",
            "description": "<p>Avatar-Image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "options",
            "description": "<p>List of Users options (Array of Objects).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "options.name",
            "description": "<p>Option Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "options.value",
            "description": "<p>Option Value.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./node_modules/apidoc/example/example.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://www.ci.garden-grove.ca.us/maps/api/user/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.2.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "This title is visible in version 0.1.0 and 0.2.0",
        "description": ""
      }
    ],
    "description": "<p>Here you can describe the function. Multilines are possible.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
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
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/apidoc/example/_apidoc.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://www.ci.garden-grove.ca.us/maps/api/user/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.1.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "This title is visible in version 0.1.0 and 0.2.0",
        "description": ""
      }
    ],
    "description": "<p>Here you can describe the function. Multilines are possible.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
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
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The error description text in version 0.1.0.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/apidoc/example/_apidoc.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://www.ci.garden-grove.ca.us/maps/api/user/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a new User",
    "version": "0.3.0",
    "name": "PostUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>In this case &quot;apiErrorStructure&quot; is defined and used. Define blocks with params that will be used in several functions, so you dont have to rewrite them.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
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
            "description": "<p>The new Users-ID.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/apidoc/example/example.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://www.ci.garden-grove.ca.us/maps/api/user"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNameTooShort\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a User",
    "version": "0.2.0",
    "name": "PostUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>In this case &quot;apiErrorStructure&quot; is defined and used. Define blocks with params that will be used in several functions, so you dont have to rewrite them.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
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
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/apidoc/example/_apidoc.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://www.ci.garden-grove.ca.us/maps/api/user"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNameTooShort\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Change a User",
    "version": "0.3.0",
    "name": "PutUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>This function has same errors like POST /user, but errors not defined again, they were included with &quot;apiErrorStructure&quot;</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          }
        ]
      }
    },
    "filename": "./node_modules/apidoc/example/example.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://www.ci.garden-grove.ca.us/maps/api/user/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNameTooShort\"\n}",
          "type": "json"
        }
      ]
    }
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
    "filename": "./node_modules/apidoc/template/main.js",
    "group": "_home_josephs_workspace_docker_gis_api_node_modules_apidoc_template_main_js",
    "groupTitle": "_home_josephs_workspace_docker_gis_api_node_modules_apidoc_template_main_js",
    "name": ""
  }
] });
