var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: "light",
  extendWith: {
    primary: themeStyle.colors.primary,
    fontSize: "16px",
  },
});

var siteConfig = {
  version: 2,
  disableInlineTableFilterButtons: true,
  routes: {
    enabledRoutes: [
      "occurrenceSearch",
      "collectionSearch",
      "collectionKey",
      "datasetSearch",
      "datasetKey",
      "institutionKey",
      "institutionSearch",
    ],
    alwaysUseHrefs: true,
    occurrenceSearch: {
      // you can overwrite individual routes.
      route: "/specimen/search", // in this case we want the occurrence search to be available on a url that says specimens instead
    },
  },
  availableCatalogues: ["OCCURRENCE"],
  occurrence: {
    excludedFilters: [
      "collection",
      "occurrenceStatus",
      "networkKey",
      "hostingOrganizationKey",
      "protocol",
      "publishingCountryCode",
      "institution",
      "eventId",
      "license",
      "organismId",
      "publisher",
      "institutionCode",
      "collectionCode",
      "sampleSizeUnit",
      "sampleSizeValue",
      "relativeOrganismQuantity",
    ],
    highlightedFilters: [
      "q",
      "verbatimScientificName",
      "datasetKey",
      "stateProvince",
      "recordedBy",
      "recordNumber",
      "identifiedBy",
      "catalogNumber",
    ],
    defaultTableColumns: [
      "catalogNumber",
      "datasetKey",
      "locality",
      "country",
      "year",
      "recordNumber",
      "recordedBy",
    ],
    mapSettings: {
      lat: 0,
      lng: 0,
      zoom: 0,
    },
    rootPredicate: {
      type: "in",
      key: "datasetKey",
      values: [
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
        "6045cef2-ae1b-486f-a321-6466f3130c10",
      ],
    },
    occurrenceSearchTabs: ["TABLE", "MAP", "GALLERY", "CLUSTERS", "DASHBOARD"], // what tabs should be shown
  },
  collection: {
    availableCatalogues: ["COLLECTION", "OCCURRENCE"],
    rootFilter: {
      institution: "c7d5c4da-9590-49c2-b87c-f0e7932611a6",
    },
  },
  dataset: {
    rootFilter: { publishingOrg: "b542788f-0dc2-4a2b-b652-fceced449591" },
    highlightedFilters: ["q"],
  },
  literature: {
    rootFilter: {
      predicate: {
        type: "or",
        predicates: [
          {
            type: "in",
            key: "countriesOfResearcher",
            values: [
              "US",
              "UM",
              "AS",
              "FM",
              "GU",
              "MH",
              "MP",
              "PR",
              "PW",
              "VI",
            ],
          },
          {
            type: "in",
            key: "countriesOfCoverage",
            values: [
              "US",
              "UM",
              "AS",
              "FM",
              "GU",
              "MH",
              "MP",
              "PR",
              "PW",
              "VI",
            ],
          },
        ],
      },
    },
    highlightedFilters: [
      "q",
      "countriesOfResearcher",
      "countriesOfCoverage",
      "year",
    ],
  },
  apiKeys: {
    maptiler: "GET_YOUR_OWN_TOKEN", // https://github.com/gbif/hosted-portals/issues/229
    mapbox: "GET_YOUR_OWN__TOKEN",
  },
  maps: {
    locale: "en",
    defaultProjection: "MERCATOR",
    defaultMapStyle: "BRIGHT",
    mapStyles: {
      ARCTIC: ["NATURAL", "BRIGHT"],
      PLATE_CAREE: ["NATURAL", "BRIGHT", "DARK"],
      MERCATOR: ["NATURAL", "BRIGHT", "SATELLITE", "DARK"],
      ANTARCTIC: ["NATURAL", "BRIGHT", "DARK"],
    },
  },
  messages: {
    // custom overwrites for the translations, e.g. label the occurrence catalog as a specimen catalog to match our data scope of specimens.
    "catalogues.occurrences": "Specimens",
  },
};
