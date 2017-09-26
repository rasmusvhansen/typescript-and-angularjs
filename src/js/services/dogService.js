(function() {
  'use strict';
  angular.module('ngAarhus').service('dogService', function($http, $log) {
    this.getDogs = function() {
      $log.info('fetching dogs');

      return $http
        .get('https://dog.ceo/api/breeds/list/all')
        .then(function(res) {
          $log.info('dogs fetched');
          const data = res.data.message;
          return Object.keys(data).map(function(k) {
            return { breed: k, subBreeds: data[k] };
          });
        });
    };

    this.getDogUrl = function(breed) {
      return $http
        .get(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(function(res) {
          return res.data.message;
        });
    };
  });
})();
