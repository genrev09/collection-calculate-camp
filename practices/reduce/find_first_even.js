'use strict';

function find_first_even(collection) {
  return collection.filter(number => number % 2 ==- 0).reduce((a,b) => a);
}

module.exports = find_first_even;

