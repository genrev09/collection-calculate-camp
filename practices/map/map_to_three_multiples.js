'use strict';
var map_to_three_multiples = function(collections){
  // return [3,9,15,12,27];
  return collections.map(numberCollection => numberCollection*3);
};

module.exports = map_to_three_multiples;
