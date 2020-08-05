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
    // Make string input lowercased and split by char into an array.
    return sArr.filter(char => vowels.indexOf(char) > -1).length 
    // Filters lowercased chars in an array.
    // Takes index of chars in vowels array that are more than - 1 (from 0 possition).

}

export { vowels };
