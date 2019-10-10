'use strict';
var number_map_to_word_over_26 = function(collection){
  function getCharfromNum(number){
    const quotient = parseInt(number/26);
    const multipliedBy26 = quotient * 26;

    return (quotient === 0) ? String.fromCharCode(number+64).toLowerCase() :
    String.fromCharCode(quotient+64).toLowerCase() + String.fromCharCode(number-(multipliedBy26)+64).toLowerCase()
  }
  // return ['a','m','aa','ad','y','aa'];
  return collection.map(number => getCharfromNum(number));
};

module.exports = number_map_to_word_over_26;
