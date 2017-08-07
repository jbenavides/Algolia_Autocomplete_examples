var client = algoliasearch('CAZ7ZA1GZG', 'f7659dfcceeea5da031eaad1c673803f');
var index = client.initIndex('Players');
/*
Alternatively, the settings can be configured via the API client, instead of do this in the dashboard.
var client = client.initIndex('YourIndexName').setSettings({
                "searchableAttributes": [
                    "name",
                    "team"
                ],
                "customRanking": [
                    "desc(points)"
                ]
                });
            
The autocomplete.js library must be included after jQuery, Zepto or Angular.js (with jQuery).            
*/


autocomplete('#search-input', { hint: false }, [
    {
      source: autocomplete.sources.hits(index, { hitsPerPage: 5 }),
      displayKey: 'name',
      templates: {
        suggestion: function(suggestion) {
          return suggestion._highlightResult.name.value;
        }
      }
    }
  ]).on('autocomplete:selected', function(event, suggestion, dataset) {
    console.log(suggestion, dataset);
  });
