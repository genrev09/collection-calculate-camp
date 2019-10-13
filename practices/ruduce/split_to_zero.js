'use strict';

function spilt_to_zero(number, interval) {
  let length = Math.trunc(number/interval) + 1;
  if(number % interval !== 0)
    length++;  

  number += interval;
  return Array.from(Array(length),(x,y) => number= parseFloat((number - interval).toFixed(1)));
}

module.exports = spilt_to_zero;
