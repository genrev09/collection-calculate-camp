'use strict';

function choose_no_repeat_number(collection) {

  //write code here
  return collection.filter((index,number) => collection.indexOf(index) === number);
}

module.exports = choose_no_repeat_number;
