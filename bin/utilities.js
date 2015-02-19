"use strict"

function converToHash(array, value) {
  var hash = {};

  if (array.length == 1){
    hash[array[0]] =  value ;

    return hash;

  } else if (array.length == 0) {

    return hash;

  } else {

    parent = array[0];
    array.shift();
    hash[parent] =  converToHash(array, value);

    return hash;
  }

};

function convertToArray(string){
  var array = string.replace(/[\[, \]]/g,'-').replace(/--/g, '-').split('-');

  for (var i = 0; i < array.length; i++) {
    if (array[i] == ''){
      array.pop(i);
    }
  };

  return array
};

function getFirstKey(obj){
  var keys = [];

  for(var k in obj) {
    keys.push(k);
  }

  return keys[0]
};

var util = {
  getFirstKey: getFirstKey,
  convertToArray: convertToArray,
  converToHash: converToHash
};

module.exports = util;