var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: '#d6b11b',
    fontSize: '16px'
  }
});

var siteConfig = {
  occurrence: {
    rootPredicate: {
      "type": "equals",
      "key": "datasetKey",
      "value": "7e380070-f762-11e1-a439-00145eb45e9a"
    },
    highlightedFilters: ['taxonKey', 'occurrenceStatus', 'year', 'occurrenceIssue'],
    mapSettings: {
      zoom: 10.290782035199692,
      lng: 4.378666162934309,
      lat: 50.83439252440547
    }
  }
};
