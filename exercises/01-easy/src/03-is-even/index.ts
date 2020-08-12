/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

function isEven(n: number) {
    let number = n.toString().split(".")[0] 
    // Converts number into a string... 
    // Then splits the number before decimal ("."), returns new array...
    // And takes the first element of an array, stores in "number".

    number = (number.slice(number.length - 1)) 
    // Takes the last digit of the number, store in an array.

    if(number === "1" 
    || number === "3" 
    || number === "5" 
    || number === "7" 
    || number === "9") {
        return false
    // If the number is odd, return false...

    } else {
        return true
    // Otherwise (if even), return true.
    }
}

export { isEven };