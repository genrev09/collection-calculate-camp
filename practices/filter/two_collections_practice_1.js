'use strict';

function choose_common_elements(collection_a, collection_b) {

  //write code here
  return collection_a.filter(collectionAString => collection_b.includes(collectionAString));

}

module.exports = choose_common_elements;
