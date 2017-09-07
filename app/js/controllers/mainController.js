 'use strict';

 app.controller('mainController', ["$scope", 'text', function($scope, text){

   $scope.greet = 'hola';
   text.greeting('hola').then(function(response){
     console.log("----------------------");
     console.log(response);
    }
   );

 }]);