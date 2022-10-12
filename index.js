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
 * first: This function is designed to take in an array and a number. If the 
 * input value isn't an array, return an empty array. If there is no input number, 
 * return the first element of the array. If the input number is greater than 
 * the length of the array, return the whole array. If the number is negative, 
 * return an empty array
 * 
 * @param {Array} array: The input array is where the values are pulled from 
 * the function first
 * @param {Number} number: The input number is the amount of elements the function
 * will pull from the input array
 * @return {Array or String} array: The function will return the number of values
 * in the array or an empty array.
 * string: If the input number is 1 or there is no input number, the function 
 * will return a string of the first value in the array
 */
function first(array, number){
    if(!Array.isArray(array)){
        return [];
    }
    if(!number){
        return array[0];
    }
    if(number < 0){
        return [];
    }
    if(number > array.length){
        return array;
    }
    return array.slice(0, number);
}
module.exports.first = first;

/**
 * last: This function takes in an array and a number and returns the input 
 * number of items from the end of the array
 * 
 * @param {Array} array: the function takes in an array of values that has more 
 * than 0 elements
 * @param {Number} number: the input number dictates how many elements should 
 * be pulled from the end of the input array
 * @return {Array or String} array: the function returns an array of elements 
 * from the end of the array based on the input number
 * string: the function will return a string if there is no input array or the 
 * input number is 1
 */
function last(array, number){
    if(!Array.isArray(array)){
        return [];
    }
    if(!number){
        return array[array.length - 1];
    }
    if(number < 0){
        return [];
    }
    if(number > array.length){
        return array;
    }
    return array.slice(-number);
}
module.exports.last = last;

/**
 * indexOf: The function indexOf takes in an array and a value then returns a 
 * number indicating the index number of the value
 * 
 * @param {Array} array: the input array holds the value with the index the 
 * function is looking for
 * @param {value} any: the value is the element in the array with an index 
 * @return {Number} number: the return number is the index of the value in the 
 * array. If the value is not in the array, the function returns -1 
 */
function indexOf(array, value){
    if(!array.includes(value)){
        return -1;
    } 
    return array.indexOf(value);
}
module.exports.indexOf = indexOf;

/**
 * contains: The function contains takes in an array and a value. The function
 * then returns a boolean of true if the value is in the array or false if the 
 * value is not in the array
 * 
 * @param {array} array: the input array is checked by the function for the value
 * @param {value} any: the value is what the function is searching the array for
 * @return {Boolean} true or false: the boolean true is returned if the value 
 * is in the array. the boolean false will return if the value isn't in the array
*/
function contains(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return true;
        }
    }
    return false;
}
module.exports.contains = contains;

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
 * unique: The function unique takes in an array and returns a copy of the 
 * array with all the duplicates removed. 
 * 
 * @param {array} array: the input array may or may not have duplicates
 * @return {array} array: the return array is a copy of the input array with the
 * duplicates removed
 */
 _.unique = function(array){
    return [...new Set(array)];
}
module.exports.unique = unique;

/**
 * filter: The function filter iterates over an array and uses a function to test 
 * an array of values. A new array is returned with the values that return true 
 * when passed into the input function
 * 
 * @param {array} array: the input array holds the values to be tested in the 
 * input function
 * @param {function} action: the input function tests the elements in the input
 * array
 * @return {array} array: the function returns an array of values that pass the 
 * function test 
 */
function filter(array, func){
    let output = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
            output.push(array[i]);
        }
        
    }
    return output;
}
module.exports.filter = filter;

/**
 * reject: the reject function is designed to iterate over an input array and 
 * return a new array of the values that returned false when passed into the 
 * function
 * 
 * @param {array} array: the input array houses the values the function is testing
 * for true or false
 * @param {function} action: the input function tests the values for true or false
 * @return {array} array: the returned array holds all the elements from the input
 * array that returned false when passed into the input function
 */
function reject(array, func){
    let output = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array) === false){
            output.push(array[i]);
        }
    }
    return output;
}
module.exports.reject = reject;

/**
 * partition: This function takes in an array and a function. It iterates over
 * the array and then calls the function on each value in the array and 
 * separates each value into two arrays.The first array holds the truthy values
 * and the second array holds the falsey values
 * 
 * @param {array} array: the input array holds the values tested by the function
 * @param {function} action: the function tests the values for truthy or falsey 
 * values
 * @return {array} array: the output array is a concatenated array/nested array
 * of the truthy and falsey values. The truthy and falsey arrays are separated 
 * inside the return array
 */
function partition(array, func){
    let truthy = [];
    let falsey = [];
    let both = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
            truthy.push(array[i]);
        } else { 
            falsey.push(array[i]);
        }
    }
    return both.concat([truthy, falsey]);
}
module.exports.partition = partition;

/**
 * map: This function takes in a collection that could be an object or an array
 * then iterates over it. A callback function then tests the elements/values in 
 * the object or array. If the values return true, they are pushed into an 
 * output array. Map returns a new array containing the same number of elements
 * from the original array
 * 
 * @param {Array or Object} collection: the input collection is an object or array
 * that has its values tested by the callback function
 * @param {function} action: the input function tests the values in the object or 
 * the array searching for the values that return true
 * @return {array} array: the function returns an array containing the same number
 * of elements from the input colleciton. Any values that return false when 
 * passed into the input function will be undefined in the return array
 */
function map(collection, func){
    let output = [];
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            output.push((func(collection[i], i, collection)));
        }
    } else { 
        for(let key in collection){
            output.push((func(collection[key], key, collection)));   
        }
    }
    return output;
}
module.exports.map = map;

/**
 * pluck: The pluck function takes in an array and a property then iterates 
 * over an input array of objects using the map function. It then returns a 
 * new array of the input property's value for each element/object in the array
 * 
 * @param {array of objects} array: the input array is an array of objects 
 * @param {property} string: the input property is a string that is a key on 
 * the objects in the input array
 * @return {array} array: the return array is the values at each of the input
 * properties on each object in the array
 */
function pluck(array, prop){
    return array.map(x => x[prop]);
}
module.exports.pluck = pluck;

/**
 * every: the function every takes in a collection (an array or object) and 
 * a function. It iterates over the collection and passes each value into the
 * function. If any value returns false from the function, the every function
 * returns false. If every value returns true, the function returns true. If there
 * is no input function, the every function tests the individual elements in 
 * the collection 
 * 
 * @param {Array or object} collection: the collection is either an array or 
 * an object to be tested 
 * @param {function} action: the callback function tests each element in the 
 * collection looking for a boolean of false
 * @return {Boolean} the function returns a boolean of true if every element in
 * the collection returns true from the callback function or it returns false
 */
function every(collection, func){
    if(!func){
        if(Array.isArray(collection)){
            for(var i = 0; i < collection.length; i++){
                if(!collection[i]){
                    return false;
                }
            }
        } else { 
                for(var key in collection){
                    if(!collection[key]){
                        return false;
                    }
                }
        }
       } else {
        if(Array.isArray(collection)){
            for(let i = 0; i < collection.length; i++){
                if(func(collection[i], i, collection) === false){
                    return false;
                }
    
            }
            
        } else { 
            for(let key in collection){
                if(func(collection[key], key, collection) === false){
                    return false;
                }
            }
        }
    }   
       return true;
    }
module.exports.every = every;

/**
 * some: The some function takes in a collection(obj or array) and a callback
 * function. If there is no callback function, the some function tests the 
 * individual elements in the collection. The some function iterates over the 
 * collection and passes the values into the callback function. If any of the 
 * values return true, the function returns true. If no values return true, the 
 * function returns false
 * 
 * @param {Array or object} collection: the input collection is tested by the 
 * callback function after being looped over. 
 * @param {function} action: The callback function checks each element in the 
 * collection. 
 * @return {Boolean} A boolean of true is returned if any of the values in the 
 * collection return true when passed to the callback function. The boolean false
 * will return if all the elements passed to the callback function return false
 */
function some(collection, func){
    if(!func){
        if(Array.isArray(collection)){
            for(var i = 0; i < collection.length; i++){
                if(collection[i]){
                    return true;
                }
            }
        } else { 
                for(var key in collection){
                    if(collection[key]){
                        return true;
                    }
                }
        }
       } else {
        if(Array.isArray(collection)){
            for(let i = 0; i < collection.length; i++){
                if(func(collection[i], i, collection)){
                    return true;
                }
    
            }
            
        } else { 
            for(let key in collection){
                if(func(collection[key], key, collection)){
                    return true;
                }
            }
        }
    }   
       return false;
    }
module.exports.some = some;

/**
 * reduce: the reduce function takes in a seed, an array, and a callback function.
 * If there is no input seed, the function sets the result equal to the first 
 * element of the array, iterates over the array, and calls the function on the 
 * current result and the elements of the array. If there is a seed, result is 
 * set to equal the seed and the same steps are taken. Reduce returns an variety
 * of datatypes depending on the input seed value and the function
 * 
 * @param {Seed} any: The seed has a value that is typically similar to the first
 * element of the input array
 * @param {array} array: the input array elements are tested using the callback
 * function 
 * @param {function} action: the callback function tests the elements of the array
 * @return {value} any: the return value is a datatype of any variety usually 
 * depending on the input seed datatype
 */
function reduce(array, func, seed){
    let result;
if(seed !== undefined){
    result = seed;
    for(let i = 0; i < array.length; i++){
        result = func(result, array[i], i, array);

    }
} else { 
    result = array[0];
    for(let i = 1; i < array.length; i++){
        result = func(result, array[i], i, array);
    }
}
return result;
}
module.exports.reduce = reduce;

/**
 * extend: the extend function takes in an unlimited number of objects and 
 * returns an object with the other objects' data copied into it
 * 
 * @param {object} object: The input object is getting new information added to 
 * it from the other objects
 * @return {object} object: the returned object is the original object with the 
 * data copied into it from the other objects
 */
function extend(...obj){
    return Object.assign(...obj, {});
}
module.exports.extend = extend;