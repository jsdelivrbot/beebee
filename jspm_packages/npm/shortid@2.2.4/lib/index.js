/* */ 
'use strict';
var alphabet = require('./alphabet');
var encode = require('./encode');
var decode = require('./decode');
var isValid = require('./is-valid');
var REDUCE_TIME = 1426452414093;
var version = 5;
var clusterWorkerId = require('./util/cluster-worker-id-browser') || 0;
var counter;
var previousSeconds;
function generate() {
  var str = '';
  var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);
  if (seconds === previousSeconds) {
    counter++;
  } else {
    counter = 0;
    previousSeconds = seconds;
  }
  str = str + encode(alphabet.lookup, version);
  str = str + encode(alphabet.lookup, clusterWorkerId);
  if (counter > 0) {
    str = str + encode(alphabet.lookup, counter);
  }
  str = str + encode(alphabet.lookup, seconds);
  return str;
}
function seed(seedValue) {
  alphabet.seed(seedValue);
  return module.exports;
}
function worker(workerId) {
  clusterWorkerId = workerId;
  return module.exports;
}
function characters(newCharacters) {
  if (newCharacters !== undefined) {
    alphabet.characters(newCharacters);
  }
  return alphabet.shuffled();
}
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.decode = decode;
module.exports.isValid = isValid;
