module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],
    karmaTypescriptConfig: {
      tsconfig: '../../tsconfig.json',
      include: ['**/*.ts'],
      coverageOptions: {
        instrumentation: false
      }
    },
    files: ['**/*.ts'],
    preprocessors: {
      '**/*.ts': ['karma-typescript'] // *.tsx for React Jsx
    },
    reporters: ['progress', 'karma-typescript'],
    browsers: ['Chrome']
  });
};
