'use strict';

function get_integer_interval(number_a, number_b) {
  let minimum = Math.min(number_a,number_b);
  const maximum = Math.max(number_a,number_b);
  const length = (maximum - minimum) +1;

  const range = Array.from(Array(length),(x,y) => minimum++);

  if(number_a <= number_b)
    return range;
  else
    return range.sort((a,b) => b-a);
}

module.exports = get_integer_interval;

