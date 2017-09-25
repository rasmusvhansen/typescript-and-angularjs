(function() {
  "use strict";
  function DogsController(dogService) {
    var ctrl = this;
    dogService.getDogs().then(function(dogs) {
      ctrl.dogs = dogs;
    });
  }

  angular.module("ngAarhus").component("dogs", {
    controller: DogsController,
    template:
      "<div>" +
      "<div><h1>{{$ctrl.breed}}</h1></div>" +
      '<dog-image breed="$ctrl.breed"></dog-image>' +
      "<ul>" +
      '<li ng-repeat="dog in $ctrl.dogs"><a href ng-click="$ctrl.breed=dog.breed">{{dog.breed}}</a>' +
      '<ul ng-if="dog.subBreeds.length">' +
      '<li ng-repeat="subBreed in dog.subBreeds">{{subBreed}}</li>' +
      "</ul>" +
      "</li> " +
      "</ul>  " +
      "</div>"
  });
})();
