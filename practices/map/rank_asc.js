'use strict';
// Wrong Description must be descending
var rank_asc = function(collection){
  // return [6,5,4,3,2];
  return collection.sort((a, b) => b-a);
};

module.exports = rank_asc;
