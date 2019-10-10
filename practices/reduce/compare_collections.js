'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.reduce((previousNumber,currentNumber,index) =>
    collection_b[index] === currentNumber
  );
}

module.exports = compare_collections;


