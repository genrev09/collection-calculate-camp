'use strict';

function get_letter_interval(number_a, number_b) {
  let minimum = Math.min(number_a,number_b);
  const maximum = Math.max(number_a,number_b);
  const length = (maximum - minimum) +1;

  const range = Array.from(Array(length),(x,y) => minimum++);

  if(number_a > number_b)
    range.sort((a,b) => b-a);
  
  return range.map(number => String.fromCharCode(number+96));
}

module.exports = get_letter_interval;
