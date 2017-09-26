(function() {
  'use strict';
  function DogsController(dogService) {
    var ctrl = this;

    ctrl.$onInit = function() {
      return dogService.getDogs().then(function(dogs) {
        ctrl.dogs = dogs;
      });
    };

    ctrl.selectDog = function(dog) {
      ctrl.selectedDog = dog;
    };
  }

  angular
    .module('ngAarhus')
    .controller('DogsController', DogsController)
    .component('dogs', {
      controller: DogsController,
      template:
        '<div>' +
        '<div><h1>{{$ctrl.selectedDog.breed}}</h1></div>' +
        '<dog-image breed="$ctrl.selectedDog.breed"></dog-image>' +
        '<ul>' +
        '<li ng-repeat="dog in $ctrl.dogs"><a href ng-click="$ctrl.selectDog(dog)">{{dog.breed}}</a>' +
        '<ul ng-if="dog.subBreeds.length">' +
        '<li ng-repeat="subBreed in dog.subBreeds">{{subBreed}}</li>' +
        '</ul>' +
        '</li> ' +
        '</ul>  ' +
        '</div>'
    });
})();
