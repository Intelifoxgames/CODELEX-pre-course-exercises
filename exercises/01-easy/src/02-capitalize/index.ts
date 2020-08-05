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
    return str.split(' ').map(str => str.charAt(0).toUpperCase() + str.substring(1)).join(' ') 
    // First spilt each word with " ".
    // Then map with a callback function every words first letter and make ir uppercase.
    // Join each word with a space.
}

export { capitalize };



// Alternate sollution
// return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) 