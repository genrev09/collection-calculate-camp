'use strict';

function grouping_count(collection) {
  let arrayNum = {};
  //write code here
  let filteredCollection = collection.filter((index,number) => (collection.indexOf(index) === number));
  filteredCollection.map(numberMap => 
    arrayNum[numberMap] = collection.filter(collectionNumber => collectionNumber === numberMap).length);

    return arrayNum;
}

module.exports = grouping_count;
