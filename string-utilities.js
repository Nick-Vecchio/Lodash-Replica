const _ = {

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
    //if new length desired is < string length return string
    if (length < string.length) {
      return string;
    }
    //
    let startPadLength = Math.floor((length - string.length) / 2);
    let endPadLength = length - string.length - startPadLength;
    let paddedString = ' '.repeat(startPadLength) + string + ' '.repeat(endPadLength);
    return paddedString;
  }
};




// Do not write or modify code below this line.
module.exports = _;