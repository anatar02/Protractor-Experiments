"use strict";
exports.config = {

  directConnect: true,

  framework: 'jasmine',
    specs: ['script.js'],
  capabilities: {
    browserName: 'chrome'
  },

  onPrepare: function() {
  }
}