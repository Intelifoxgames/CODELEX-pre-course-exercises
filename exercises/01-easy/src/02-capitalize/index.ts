/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str: string) {
    return str.split(' ')
    // First spilt each word with " " (condition that there is a space between and after the word)... 
    // And return as an array.
    
    .map(str => str.charAt(0).toUpperCase() + str.substring(1)).join(' ') 
    // Then map with a callback function every word's first letter and make it uppercase.
    // Joins back with the substring the rest of a word.
    // Join each word with a space in a whole string.
}

export { capitalize };



// Alternate sollution
// return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) 