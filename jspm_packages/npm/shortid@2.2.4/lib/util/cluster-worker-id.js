/* */ 
(function(process) {
  'use strict';
  module.exports = parseInt(process.env.NODE_UNIQUE_ID || 0, 10);
})(require('process'));
