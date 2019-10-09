'use strict';

function collect_all_even(collection) {
  const evenCondition = n => n%2 == 0;

  return collection.filter(evenCondition);
}

module.exports = collect_all_even;
