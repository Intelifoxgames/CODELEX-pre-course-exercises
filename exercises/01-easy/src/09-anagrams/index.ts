/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA: string, stringB: string) {
    
    // 1. Removes non-alphanumeric characters with RegEx.
    // 2. Splits string by characters and puts into an array.
    // 3. Sorts chars in the array.
    // 4. Joins sorted array back to string.
    // 5. Makes string lowercase.
    
    const charStrA = stringA.replace(/\W/g, '').split("").sort().join("").toLowerCase() 
    const charStrB = stringB.replace(/\W/g, '').split("").sort().join("").toLowerCase() 
    
    if(charStrA === charStrB) {
        return true
    } else {
        return false
    }

}

export { anagrams };
