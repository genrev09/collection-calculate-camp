'use strict';

function compute_median(collection) {
  let medianIndex= Math.trunc(collection.length/2);
  collection.sort((a,b) => a-b);

  if(collection.length % 2 !== 0){
    return collection.filter((number,index) => index === medianIndex)
    .reduce(a => a);
  }
  else{
    return collection.filter((number,index) => index === medianIndex || index === medianIndex - 1)
    .reduce((a,b) => a+b)/2;
  }
}

module.exports = compute_median;


