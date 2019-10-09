'use strict';
var number_map_to_word = function(collection){
  // return ['a','b','c','d','e'];
  return collection.map(number => String.fromCharCode(number+64).toLowerCase());
};

module.exports = number_map_to_word;
