"use strict";
import {Config} from 'protractor'

let conf:Config = {
  directConnect: true,
  baseUrl: 'http://www.protractortest.org/testapp/ng1/#/form',

  framework: 'jasmine2',
    specs: ['*/*/experiment.js'],
  capabilities: {
    'browserName': 'chrome'
  },

  onPrepare: function() {

  }
};

exports.config = conf;