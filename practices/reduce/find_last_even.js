'use strict';

function find_last_even(collection) {
  return collection.filter(number => number % 2 ==- 0).reduce((a,b) => b);
}

module.exports = find_last_even;
