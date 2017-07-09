var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha'],
        files: [
            'src/**/*.test.js',
        ],
        exclude: [
        ],
        preprocessors: {
            'src/**/*.test.js': ['webpack'],
        },
        plugins: [
            'karma-mocha',
            'karma-webpack',
            'karma-chrome-launcher',
        ],
        coverageReporter: {
            type: 'text-summary',
        },
        bambooReporter: {
            filename: 'util.mocha.json',
        },
        webpack: webpackConfig,
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity,
  });
};