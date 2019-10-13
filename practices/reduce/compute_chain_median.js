'use strict';

function compute_chain_median(collection) {
  let number = collection.split('->');
  let medianIndex= Math.trunc(number.length/2);
  number = number.map(number => parseInt(number,10)).sort((a,b) => a-b);
  
  if(number.length % 2 !== 0){
    return number.filter((value,index) => index === medianIndex)
    .reduce(a => a);
  }
  else{
    return number.filter((value,index) => index === medianIndex || index === medianIndex - 1)
    .reduce((a,b) => a+b)/2;
  }
}

module.exports = compute_chain_median;
