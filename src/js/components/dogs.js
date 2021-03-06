(function() {
  'use strict';
  function DogsController(dogService /*otherDep*/) {
    //otherDep.initialize();
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
    .service('otherDep', function() {
      this.initialize = function() {
        for (var i = 0; i < 1000; i++) {
          console.log('doing expensive stuff' + i);
        }
      };
    })
    .component('dogs', {
      controller: DogsController,
      template:
        '<div>' +
        '  <div><h2>{{$ctrl.selectedDog.breed}}</h2></div>' +
        '  <dog-image breed="$ctrl.selectedDog.breed"></dog-image>' +
        '  <ul>' +
        '    <li ng-repeat="dog in $ctrl.dogs">' +
        '      <a href ng-click="$ctrl.selectDog(dog)">{{dog.breed}}</a>' +
        '      <ul ng-if="dog.subBreeds.length">' +
        '        <li ng-repeat="subBreed in dog.subBreeds">{{subBreed}}</li>' +
        '      </ul>' +
        '    </li> ' +
        '  </ul>  ' +
        '</div>'
    });
})();
