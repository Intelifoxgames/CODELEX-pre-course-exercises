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
    let sntcSplt: string[] = sen.split(/\W/g) 
    // Split each word in sentence with space, removes non-alphab. chars.
    // Returns an array.

    let crrntLngstWrd = 0
    let actlLngstWrd = ""
    // Assigns first word. First word will be compared to the rest and the longest will be determined.

    sntcSplt.forEach(word => { 
        // For each word in "sntcSplt"...
        
        if(word.length > crrntLngstWrd) { 
            // If that word is longer than current longest word, starting by default from 0...
            
            crrntLngstWrd = word.length 
            // Testing word length is stored to "crrntLngstWrd" and... 
            
            actlLngstWrd = word 
            // And the word itself is stored in actualLongestWord.
        }
    });
    return actlLngstWrd
}
export { longestWord };
