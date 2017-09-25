(function() {
  "use strict";

  function DogImageController(dogService) {
    var ctrl = this;
    this.$onChanges = function() {
      if (ctrl.breed) {
        dogService.getDogUrl(ctrl.breed).then(function(url) {
          ctrl.dogImage = url;
        });
      }
    };
  }

  angular.module("ngAarhus").component("dogImage", {
    bindings: {
      breed: "<"
    },
    controller: DogImageController,
    template: `<img ng-src="{{$ctrl.dogImage}}" class="pull-right">`
  });
})();
