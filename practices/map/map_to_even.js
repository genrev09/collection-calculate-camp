'use strict';
function map_to_even(collection){
  // return [2,4,6,8,10];
  return collection.map(numberCollection => numberCollection * 2);
}
module.exports = map_to_even;
