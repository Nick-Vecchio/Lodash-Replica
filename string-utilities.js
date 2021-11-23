const _ = {

  //BEGIN NUMBER METHODS
  
   /**
   * clamp modifies number to be within lower & upper bounds.
   * @param {number} number The number to check.
   * @param {number} lower The lower bound.
   * @param {number} upper The upper bound.
   * @returns {number} Returns clamped number.
   */
    clamp: function(number, lower, upper) {
      //find which number to low clamp by
      lowerClampedValue = Math.max(number, lower);
      //clamp number by upper bound 
      clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
  
   /**
   * inRange checks if number is in range of start & end value.
   * @param {number} number The number to check.
   * @param {number} startVal The starting value.
   * @param {number} endValue The edning value.
   * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
   */
    inRange: function(number, startVal, endVal) {
      //if endVal is undefined set endVal to startVal then set startVal to 0
      if (endVal === undefined) {
        endVal = startVal;
        startVal = 0;
      }
      //if startVal > endVal swap the values
      if (startVal > endVal) {
        let temp = endVal;
        endVal = startVal;
        startVal = temp;
      }
      //set isInRange to result of boolean expression
      let isInRange = Boolean(startVal <= number && number < endVal);
      return isInRange;
    },
  
    //BEGIN STRING METHODS
  
   /**
   * words splits a string into an array of words based on split
   * character of space.
   * @param {string} string The string to split
   * @returns {array} Returns array of words.
   */
    words: function(string) {
      //split string into array of words off of space char
      const words = string.split(' ');
      return words;
    },
  
   /**
   * pad adds padding equally to each side of string.
   * pad will pad end if odd number to pad.
   * @param {string} string The string.
   * @param {number} length Desired length of string.
   * @returns {string} Returns string with padding added.
   */
    pad: function(string, length) {
      //if new length desired is < string length, return string
      if (length < string.length) {
        return string;
      }
      //set value of startPadLength = length minus string
      //divided by two and rounded down
      let startPadLength = Math.floor((length - string.length) / 2);
      //set value of endPadLength = length param - string 
      //param length - startPadLength to get end padding
      let endPadLength = length - string.length - startPadLength;
      //repeat adding a space to front of string for startPadLength then concat string then concat adding spaces to end based on endPadLength
      let paddedString = ' '.repeat(startPadLength) + string + ' '.repeat(endPadLength);
      return paddedString;
    },
  
  // BEGIN OF OBJECT METHODS
  
   /**
   * has Checks if provided object contains a value at -
   * specified key.
   * @param {object} obj The object to check.
   * @param {key} Key to check for value
   * @returns {boolean} Returns true if obj contains value at key else returns false if value not found.
   */
  has: function(obj, key) {
    const hasValue = obj[key];
    if (hasValue != undefined){
      return true;
    } return false;
  },
  
   /**
   * invert Swaps the key and value of key/value pairs.
   * @param {object} object The object to check.
   * @returns {object} Returns object with values swapped.
   */
  
  invert: function(object) {
    invertedObject = {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObject = {originalValue: key};
    }
    return invertedObject;
  },
  
  /**
   * findKey Returns the key of the first element predicate returns truthy
   * @param {Object} object The object to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {string|undefined} Returns the key of the matched element,
   */
  
  findKey: function(object, predicate) {
    for (const key in object) {
      const value = object[key];
      const predicateReturnValue = predicate(value);
      if (predicateReturnValue === true) {
        return key;
      } return undefined;
    }
  },
  
  //BEGIN ARRAY MEHODS
  
  /**
   * drop Returns new array with elements dropped from beginning of original array.
   * @param {Array} array The array to query.
   * @param {number} [n=1] The number of elements to drop.
   * @returns {Array} Returns the slice of `array`.
  */
  
  drop: function() {
    
  }
  
  };
  
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;
  