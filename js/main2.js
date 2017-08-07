var client = algoliasearch('CAZ7ZA1GZG', 'f7659dfcceeea5da031eaad1c673803f');
var index = client.initIndex('Players');

/*
doc about options of autocomplete.js:
https://github.com/algolia/autocomplete.js#options
*/
autocomplete('#aa-search-input', { hint: false }, {
    source: autocomplete.sources.hits(index, {hitsPerPage: 5}),
    //value to be displayed in input control after user's suggestion selection
    displayKey: 'name',
    //hash of templates used when rendering dataset
    templates: {
        //'suggestion' templating function used to render a single suggestion
        suggestion: function(suggestion) {
            console.log(suggestion)
          return '<span>' +
            suggestion._highlightResult.name.value + '</span><span>' +
            suggestion._highlightResult.team.value + '</span>';
        }
    }
});