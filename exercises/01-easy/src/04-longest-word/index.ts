/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string) {
    let sntcSplt = sen.split(/\W/g) // Split each word in sentence with space, removes non-alphab. char.
    let trgtWrd = sntcSplt[0] // Assigns first word.

    sntcSplt.forEach(wordIndex => {
        if(wordIndex.length > trgtWrd.length) { // If the length of the each word in sentence is longer than target.
            trgtWrd = wordIndex // Assign it as a target word.
        }
    });
    
    return trgtWrd
}

export { longestWord };
