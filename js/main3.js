var client = algoliasearch('CAZ7ZA1GZG', 'f7659dfcceeea5da031eaad1c673803f');

var players = client.initIndex('Players');
var teams = client.initIndex('Teams');


autocomplete('#aa-search-input', {
                        debug: true, 
                        templates: {
                                        dropdownMenu:
                                        '<div class="aa-dataset-player"></div>' +
                                        '<div class="aa-dataset-team"></div>'
                                    }
                                }, 
[
    {
      source: autocomplete.sources.hits(players, { hitsPerPage: 7 }),
      displayKey: 'name',
      name: 'player',
      templates: {
        header: '<div class="aa-suggestions-category">Players</div>',
        suggestion: function(suggestion) {
          return '<span>' +
            suggestion._highlightResult.name.value + '</span><span>'
              + suggestion._highlightResult.team.value + '</span>';
        },
        empty: '<div class="aa-empty">No matching players</div>'
      }
    },
    {
      source: autocomplete.sources.hits(teams, { hitsPerPage: 5 }),
      displayKey: 'name',
      name: 'team',
      templates: {
        header: '<div class="aa-suggestions-category">Teams</div>',
        suggestion: function(suggestion) {
          return '<img src="https://www.algolia.com/img/nba/' + suggestion.logoUrl + '">' + '<div><span>' +
            suggestion._highlightResult.name.value + '</span><span>' +
            suggestion._highlightResult.location.value + '</span></div>';
        },
        empty: '<div class="aa-empty">No matching teams</div>'
      }
    }
]);