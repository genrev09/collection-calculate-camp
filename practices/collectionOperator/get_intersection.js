'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  return collection_b.filter(numberB => -1 !== collection_a.indexOf(numberB));
}

module.exports = get_intersection;
