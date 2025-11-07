var siteConfig = {
  "version": 3,
  "pages": [
    {
      "id": "occurrenceSearch",
      "path": "specimen/search"
    },
    {
      "id": "collectionSearch"
    },
    {
      "id": "collectionKey"
    },
    {
      "id": "datasetSearch"
    },
    {
      "id": "datasetKey"
    },
    {
      "id": "institutionKey"
    },
    {
      "id": "institutionSearch"
    },
    {
      "id": "literatureSearch"
    }
  ],
  "disableInlineTableFilterButtons": true,
  "availableCatalogues": [
    "OCCURRENCE"
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": themeStyle.colors.primary,
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "apiKeys": {
    "maptiler": "GET_YOUR_OWN_TOKEN",
    "mapbox": "GET_YOUR_OWN__TOKEN"
  },
  "maps": {
    "locale": "en",
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "ARCTIC": [
          "NATURAL",
          "BRIGHT"
        ],
        "PLATE_CAREE": [
          "NATURAL",
          "BRIGHT",
          "DARK"
        ],
        "MERCATOR": [
          "NATURAL",
          "BRIGHT",
          "SATELLITE",
          "DARK"
        ],
        "ANTARCTIC": [
          "NATURAL",
          "BRIGHT",
          "DARK"
        ]
      }
    }
  },
  "messages": {
    "en": {
      "catalogues.occurrences": "Specimens"
    },
    "fr": {
      "catalogues.occurrences": "Specimens"
    }
  },
  "occurrenceSearch": {
    "scope": {
      "type": "in",
      "key": "datasetKey",
      "values": [
        "4edd9396-59df-4b01-9e29-dc21a59f9963",
        "07fd0d79-4883-435f-bba1-58fef110cd13",
        "90302970-1bc6-4865-be76-9aef1dd707f9",
        "9c45867f-f77d-42f3-9751-ae16bb7c9bc8",
        "628abbe5-dc8d-41e9-a0c7-f05efe282649",
        "ca1bcd7e-7387-42f9-81ba-1470db55e3e8",
        "3ad882bb-cd21-4201-8b83-3684bfc6d830",
        "ba0c046d-52bb-4262-a495-652988c9f3f7",
        "df9c8b86-9d36-4e29-91b3-4274dff053e5",
        "4caf2040-83ad-4fa7-ba13-005bced721eb",
        "86e3e77d-8fc7-432f-8835-efe87f7248b3",
        "6045cef2-ae1b-486f-a321-6466f3130c10"
      ]
    },
    "highlightedFilters": [
      "q",
      "verbatimScientificName",
      "datasetKey",
      "stateProvince",
      "recordedBy",
      "recordNumber",
      "identifiedBy",
      "catalogNumber"
    ],
    "excludedFilters": [
      "collection",
      "occurrenceStatus",
      "networkKey",
      "hostingOrganizationKey",
      "protocol",
      "publishingCountry",
      "institution",
      "eventId",
      "license",
      "organismId",
      "publisher",
      "institutionCode",
      "collectionCode",
      "sampleSizeUnit",
      "sampleSizeValue",
      "relativeOrganismQuantity"
    ],
    "defaultEnabledTableColumns": [
      "catalogNumber",
      "datasetKey",
      "locality",
      "country",
      "year",
      "recordNumber",
      "recordedBy"
    ],
    "tabs": [
      "table",
      "map",
      "gallery",
      "clusters",
      "dashboard",
      "download"
    ],
    "mapSettings": {
      "lat": 0,
      "lng": 0,
      "zoom": 0
    }
  },
  "collectionSearch": {
    "scope": {
      "institutionKey": [
        "c7d5c4da-9590-49c2-b87c-f0e7932611a6"
      ]
    }
  },
  "institutionSearch": {},
  "datasetSearch": {
    "scope": {
      "publishingOrg": "b542788f-0dc2-4a2b-b652-fceced449591"
    },
    "highlightedFilters": [
      "q"
    ]
  },
  "publisherSearch": {},
  "literatureSearch": {
    "scope": {
      "type": "or",
      "predicates": [
        {
          "type": "in",
          "key": "countriesOfResearcher",
          "values": [
            "US",
            "UM",
            "AS",
            "FM",
            "GU",
            "MH",
            "MP",
            "PR",
            "PW",
            "VI"
          ]
        },
        {
          "type": "in",
          "key": "countriesOfCoverage",
          "values": [
            "US",
            "UM",
            "AS",
            "FM",
            "GU",
            "MH",
            "MP",
            "PR",
            "PW",
            "VI"
          ]
        }
      ]
    },
    "highlightedFilters": [
      "q",
      "countriesOfResearcher",
      "countriesOfCoverage",
      "year"
    ]
  }
}