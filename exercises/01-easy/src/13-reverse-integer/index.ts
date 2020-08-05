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
    
    // 1. Make "int" into a string.
    // 2. Split each char with "" in the array.
    // 3. Reverse each char.
    // 4. Join back each char.

    let rvrsdNum = int.toString().split("").reverse().join("") 

    // Return back correct sign at the beginning.
    // Turn string backt to number.

    return Math.sign(int) * parseInt(rvrsdNum)
}

export { reverse };
