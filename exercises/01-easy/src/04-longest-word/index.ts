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
    let sntcSplt: string[] = sen.split(/\W/g) // Split each word in sentence with space, removes non-alphab. char.
    let crrntLngstWrd = 0
    let longest = ""
    // Assigns first word. First word will be compared to the rest and the longest will be determined.

    sntcSplt.forEach(word => { // For each word in "sntcSplt"...
        if(word.length > crrntLngstWrd) { // If that word is longer than previous word, starting by default from 0...
            crrntLngstWrd = word.length // Its length is stored and... 
            longest = word // The word itself is stored here.
        }
    });
    
    return longest
}

export { longestWord };
