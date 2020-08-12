/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number) {
    
    let rvrsdNum = int.toString().split("").reverse().join("") 
    // 1. Turn input number into a string.
    // 2. Split each char with, save in the array.
    // 3. Reverse the array.
    // 4. Join back each char into a string.

    return Math.sign(int) * parseInt(rvrsdNum)
    // Returns the sign of each input number.
    // Turns string back to number and adds original input number's sign.
}

export { reverse };
