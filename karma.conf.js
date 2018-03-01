'use strict';

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {

  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha'],
    singleRun: true,
    files: [
      './../../tests.js' // project root
    ],
    plugins: [
      'karma-mocha',
      'karma-chrome-launcher'
    ]
  });

};
