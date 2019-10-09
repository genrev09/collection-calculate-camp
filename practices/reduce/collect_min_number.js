'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  return collection.reduce((currentNumber, previousNumber) => (previousNumber < currentNumber) ? previousNumber : currentNumber );
}

module.exports = collect_min_number;

