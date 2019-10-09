'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //write code here
  return collection_a.filter(collectionANumber => 
    collectionANumber%
    collection_b.filter(collectionBNumber => collectionANumber%collectionBNumber === 0) === 0);
}

module.exports = choose_divisible_integer;
