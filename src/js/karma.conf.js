module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      '../../node_modules/angular/angular.js',
      '../../node_modules/angular-mocks/angular-mocks.js',
      '**/*.js'
    ],
    reporters: ['progress', 'karma-typescript'],
    browsers: ['Chrome']
  });
};
