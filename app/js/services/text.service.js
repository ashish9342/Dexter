'use strict';

app.factory('text', function($http){

  var success = function(response) {
    console.log(response);
  }
  var error = function(error) {
    console.error(error);
  }

  var greeting = function(query) {
      var requestURL = CONFIG.contextURL + 'chat',
          data = {
            'query': query
          };
          console.log(requestURL);

      return $http({
          url: requestURL,
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': ''
          },
          data: data
      }).then(success, error);
    };

    return {
      greeting : greeting
    }
});
