/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
    const vowels = ["a", "e", "i", "o", "u"] 
    const sArr = s.toLowerCase().split("") 
    console.log(sArr)
    // Make string input lowercased and split by chars into the array.
    
    return sArr.filter(char => vowels.indexOf(char) > -1).length 
    // Filters chars in an array.
    // Compares each char of "sArr" with "vowels"  from - 1 (from 0 possition).
    // Return the length of matching chars with vowels.
}
export { vowels };
