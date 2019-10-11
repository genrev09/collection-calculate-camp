'use strict';

function compute_median(collection) {
  //write code here
  return collection.reduce((total, number) => total + number)/collection.length;
}

module.exports = compute_median;


