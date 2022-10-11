'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: This function is designed to take in a value and return that value
 * unchanged.
 * 
 * @param {value} any: this value can be any type
 * @return {value} any: the return value is the unchanged parameter value
 */
function identity(value){
    return value;
}
module.exports.identity = identity;

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
 * 
 * typeOf: function is designed to return the type of the input value
 * 
 * @param {value} any: The input value is one of string, array, object, undefined,
 * number, boolean, null, or function
 * @return {string} : The return is a string representing the type of the input
 * value
 */
function typeOf(value){
    if(Array.isArray(value)){
        return "array";
    } else if(value === null){
        return "null";
    } else if(value === undefined){
        return "undefined";
    } else {
        return typeof value;
    }
}
module.exports.typeOf = typeOf;

/**
 * 
 * first: This function is designed to take in an array and a number. If the 
 * input value isn't an array, return an empty array. If there is no input number, 
 * return the first element of the array. If the input number is greater than 
 * the length of the array, return the whole array. If the number is negative, 
 * return an empty array
 */