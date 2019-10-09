'use strict';

function choose_even(collection) {

  //write code here
  return collection.filter(numberCollection => numberCollection%2 === 0)
}

module.exports = choose_even;
