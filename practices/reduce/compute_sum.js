'use strict';

function calculate_elements_sum(collection) {
  //write code here
  return collection.reduce((previousNumber,currentNumber) => previousNumber + currentNumber);
}

module.exports = calculate_elements_sum;

