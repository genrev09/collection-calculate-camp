'use strict';

function get_letter_interval_2(number_a, number_b) {
  let minimum = Math.min(number_a,number_b);
  const maximum = Math.max(number_a,number_b);
  const length = (maximum - minimum) +1;

  const range = Array.from(Array(length),(x,y) => minimum++);

  if(number_a > number_b)
    range.sort((a,b) => b-a);
  
  return range.map(number => { 
    let quotient = Math.trunc(number / 27);
    let remaining = number - (quotient * 26);
    
    if(remaining === 27){
      quotient+=1;
      remaining = 1;
    }
    
    if (quotient === 0)
      return String.fromCharCode(number+96);
    else
      return String.fromCharCode(quotient+96) + String.fromCharCode(remaining+96);
  });
}

module.exports = get_letter_interval_2;

