'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: take a value and return that input value unchanged.
 * 
 * @param {*} value: single value that can be any datatype
 * 
 * @return {*}: the input value unchanged
 * 
 */
  
function identity(value){
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: Designed to take in a value and return a string of it's datatype.
 * 
 * @param {*} value: single value that can be any datatype
 * 
 * @return {String}: a string of the value's datatype 
 * 
 */
 
function typeOf(value) {
    if (typeof value === "string"){
        return "string";
    } else if (typeof value === "undefined"){
        return "undefined";
    } else if (typeof value === "number"){
        return "number";
    } else if (typeof value === "boolean"){
        return "boolean";
    } else if (typeof value === "function"){
        return "function";
    } else if (value === null){ 
        return "null";
    } else if (Array.isArray(value)){ 
        return "array";
    } else { 
        return "object";
    }
        
  }
  module.exports.typeOf = typeOf;
  
  
  /**
   * first: Designed to take in an array and a value and return the value (number) of items starting at the beginning of the array
   * 
   * @param {Array} array: The array that will provide the data to be returned based on the number
   * @param {Number} number: The number that will specify how many values to return from the array
   * 
   * @return {array}: If array is an array and number is a number that is <= the amount of items in the array, return the array with 
   * the number of items in the array starting from the beginning.
   * @return {array} edge cases: if array is not an array or if the number is negative, return an empty array []
   *    If number is not a number or is undefined, return the first [0] index of the array only.
   */
   
  
function first (array, number){
    if (!Array.isArray(array) || number < 0){ 
        return [];
    } else if (typeof number !== "number" || number === undefined){ 
        return array[0];
    } else {
        return array.slice(0,number); 
    }
}
module.exports.first = first;


  /**
   * last: Designed to take in an array and a value and return the value (number) of items starting at the end of the array
   * 
   * @param {Array} array: The array that will provide the data to be returned based on the number
   * @param {Number} number: The number that will specify how many values to return from the array
   * 
   * @return {Array}: If array is an array and number is a number that is <= the amount of items in the array, return the array with 
   * the number of items in the array starting from the end.
   * @return {Array} edge cases: if array is not an array or if the number is negative, return an empty array []
   *    If number is not a number or is undefined, return the last index of the array only.
   *    If number is greater than amount of items in the array, return the whole array.
   */

function last(array, number){
    if (!Array.isArray(array) || number < 0){ 
        return [];
    } else if (typeof number !== "number" || number === undefined){ 
        return array[array.length-1];
    } else if (number > array.length){ 
        return array;
    } else {
        return array.slice(array.length-number, array.length); 
    }
}
module.exports.last = last;


  /**
   * indexOf: Designed to take in an array and a value and return the index of the index of the first instance of the value in the array
   * 
   * @param {Array} array: The array which to loop over to check for the value
   * @param {*} value: The value of any datatype to look for in the array 
   * 
   * @return {Number}: If value occurs in the array, return the index number where that value first occurs
   * @return {Number} edgecases: If value does not occur in the array, return -1
   *    If array has multiple occurences of the value, will return first index because loop starts at the beginning of the array.
   */
   
function indexOf(array, value){
    for (var i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    } return -1;
}
module.exports.indexOf = indexOf;


/** contains: designed to take in an array and a value and reture a boolean if the array contains the value or not
 * 
 * @param {Array} array: The array which to look for the value
 * @param {*} value: The value to search for in the array
 * 
 * @return {Boolean}: If value is in the array, return true. If it is not, retun false.
 * @return {Boolean} edge cases: If no value is given, return false.
 * 
 */
 
function contains(array,value){
    return (array.includes(value) ? true : false); 
}
module.exports.contains = contains;




/** unique: Takes in an array and returns a new array with only unique elements from the original array
 * 
 * @param {Array} array: array of which to loop through and check for duplicates.
 * 
 * @return {Array}: returns a new array of values from the original array with all duplicates removed.
 * 
 */
 
function unique(array){

    var newArray = []; 
    
    for (var i = 0; i < array.length; i++){ 
        if (indexOf(array, array[i]) !== -1 && !newArray.includes(array[i])){ 
            newArray.push(array[i]); 
        }
    } return newArray; 
}
module.exports.unique = unique;


/** filter: takes in an array and a function and returns the only items in the array that after passing through the function have passed as true
 * 
 * @param {Array} array : the original array containing all the values that will be passed through the function
 * @param {Function} func : the function that will take the value, index and array and determine a true or false return for each
 * 
 * @return {Array}: returns a new array of values from the original that passed through the function and evaluated as true
 * If function produces a result of false or anything other than true, it will not be added to the new array.
 */
 
function filter(array, func){
    
  var filterArray = []; 
  
  for (var i = 0; i < array.length; i++){ 
      if (func(array[i], i, array) === true){ 
          filterArray.push(array[i]);
      } 
  } return filterArray;
}
module.exports.filter = filter;


/** reject: designed to do the same as filter, but return the values that receive the opposite result from the function (false values)
 * 
 * @param {Array} array: the array which values will each be passed into the function and be assessed for true or false
 * @param {Function} func: the function that will take in a value, index and array and assess a true or false value from it
 * 
 * @return {Array} array: the array of values that assessed as false through the function. 
 */
 
function reject(array, func){
    return filter(array, function(e, i, a){ 
        return !func(e, i, a);
    });
}
module.exports.reject = reject;


/** partition: designed to take an array and a function and return an array of two arrays- the first with values that assessed
 *  as true when passed through the function, and the second an array of values that assessed as false when passed through.
 * 
 * @param {Array} array: the original array with values to be passed through the function
 * @param {Function} func: the function that takes in the value, index and array and test for true or false
 * 
 * @return {Array}: Will return an array containing two arrays, the first with values that passed through the function and 
 * assessed as true, the second with values that passed through the function and assessed as false.
 * 
 */
 
function partition(array, func){
    var bothArray = [[],[]];
    
   
   for (var i = 0; i < array.length; i++){
       if (func(array[i], i, array)){ 
           bothArray[0].push(array[i]); 
       } else if (!func(array[i], i, array)){ 
           bothArray[1].push(array[i]); 
       }
   } return bothArray;
}
module.exports.partition = partition;


/** map: designed to take in a collection and a function. It will pass each element into the function and push
 *  returned value to a new array. The return is a new array of these changed elements.
 * 
 * @param {Array or Object} collection: The collection of elements that will be passed through the function
 * @param {Function} func: The function that takes each element from the array or object and passes them through, returning a changed value
 * 
 * @return {Array} array: The new array of values that were from the original collection and passed through the function.
 * 
 */
 
function map(collection, func){
    var mapArray = []; 
    
     if (Array.isArray(collection)){ 
      for (var i = 0; i < collection.length; i++){  
          mapArray.push(func(collection[i], i, collection)); 
      }
  } else {
      for (var key in collection){ 
          mapArray.push(func(collection[key], key, collection)); 
      }
  }return mapArray; 

}
module.exports.map = map;

/** pluck: designed to take in an array of objects and a key name and will return an array of all values 
 *  assigned to those key names for each object.
 * 
 * @param {Array} array: The array of object of which to look for the values at each key
 * @param {String} key: The string name of the key property where to grab the values from 
 * 
 * @return {Array} array: Returns an array of all the values associated with the given key property from each object in the array.
 */
 
function pluck(array, key){
  let final = array.map(function(element){ 
      return element[key];
  });
  return final; 
}

module.exports.pluck = pluck;

/** every: Designed to take in a collection and a function and returns a boolean value. Each element from the collection is passed 
 *  through the function and if it is assessed as true for each value, it returns true. If even one value evaluates in the function
 *  as false, every returns false. If function is undefined and all the elements test as truthy, return true.
 *  If function is undefined and even one element tests as falsey, return false.
 * 
 * @param {Array or Object} collection: The array or object with the values to be passed through the function.
 * @param {Function} func: the function that will take in the element from array or object and return true or false
 * 
 * @return {Boolean}: Will return true if all elements pass through function as true. False is even one element passes through as false.
 * 
 */

function every(collection, func){

var final = true;
if (func !== undefined) {
    each(collection, function(element, index, collection) {
        if(func(element, index, collection) === false) {
            final = false;
            }
        });
} else {
    each(collection, function(element) {
        if(element === false) {
            final = false;
            }
        });
    } return final;
}
module.exports.every = every;


/** some: Designed to take in a collection and a function and returns a boolean value. Each element from the collection is passed 
 *  through the function and if at least one element is assessed as true, it returns true. It will return false only if every
 *  value is assessed as false. If function is undefined and all the elements test as falsey, return false.
 *  If function is undefined and even one element tests as truthey, return true.
 * 
 * @param {Array or Object} collection: The array or object with the values to be passed through the function.
 * @param {Function} func: the function that will take in the element from array or object and return true or false
 * 
 * @return {Boolean}: Will return false if all elements pass through function as false. True is even one element passes through as True.
 * 
 */

function some(collection, func){
var final = false;
if (func !== undefined) {
    each(collection, function(element, index, collection) {
        if(func(element, index, collection) === true) {
            final = true;
            }
        });
} else {
    each(collection, function(element) {
        if(element === true) {
            final = true;
            }
        });
    } return final;
}
module.exports.some = some;


/** reduce: takes an array, a function and a seed. It passes each value in the array through the function and uses the seed
 *  as a starting value to build upon each iteration, depending what the function is. It will return the final value of the seed after
 *  all values are passed through the function and the seed has been altered by each iteration.
 *  If no seed is given, the function will use the value of the zero index in the array and move on to the second index iteration.
 * 
 * @param {Array} array: The collection of values that will go through the function to build on the seed
 * @param {Function} func: The function that will take in the seed(total), element, and index and return a changed seed(total).
 * @param {*} seed: The value of any datatype that the function will use as a starting number in its parameter and will be built on each iteration
 * 
 * @return {*}: Will return any datatype that is the value of the seed(total) after all values are passed through the function.
 * 
 */
 

function reduce(arr, func, seed){
 
 if (seed === undefined){ 
     var total = arr[0];
     for (var i = 1; i < arr.length; i++){ 
         total = func(total, arr[i], i); 
     } 
        return total; 
        
 } else {
     total = seed; 
     for (var i = 0; i < arr.length; i++){ 
        total = func(total, arr[i], i); 
     
     } 
        return total;
 }
}
module.exports.reduce = reduce;


/** extend: designed to take in any number of objects and loop through them to add/change their key/value pairs to the first object.
 *  the first object will be returned with any new key value pairs from other objects and any changes made to its own keys other objects
 *  had different values for. 
 * 
 * @param {Object} obj1: The first object that will eventually be returned once all the other objects add/change (to) it.
 * @param {Object} obj2: The second object that will either change obj1 (if more than 2 objects, after it has been changed already)
 * @param {Object} obj: The representation of all other possible objects that could be passed thruogh to change each other then to change obj2.
 * 
 * @return {Object}: Will return an object (obj1), with its key/values changed or added from the other objects.
 * 
 */
 
function extend(obj1,obj2,...obj){
  
  for (var i = 0; i < obj.length; i++){ 
    for (var key in obj[i]){ 
      obj2[key] = obj[i][key]; 
    }
  }

  for (var key in obj2){ 
      obj1[key] = obj2[key]; 
  }
  return obj1; 

}
module.exports.extend = extend;