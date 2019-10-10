'use strict';

function compute_average(collection) {
  //在这里写入代码
  return collection.reduce((previousNumber,currentNumber) => (previousNumber + currentNumber))/collection.length;
}

module.exports = compute_average;

