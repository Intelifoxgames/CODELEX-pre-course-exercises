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
    let odd = n.toString().split(".")[0] // Converts number into a string, then splits the number at "." and takes the first part.

    odd = (odd.slice(odd.length - 1)) // Takes the last number of the odd number.
    if(odd === "1" 
    || odd === "3" 
    || odd === "5" 
    || odd === "7" 
    || odd === "9") {
        return false
    } else {
        return true
    }
}

export { isEven };