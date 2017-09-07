'use strict';

app.factory('text', function($http){


  var greeting = function(query) {

      var requestURL = CONFIG.contextURL + 'chat',
          data = {
            'query': query
          };

      return $http({
          url: requestURL,
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': ''
          },
          data: data
      });


});
