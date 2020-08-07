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
    let maxLetters = 0
    let longest = ""
    // Assigns first word. First word will be compared to the rest and the longest will be determined.

    sntcSplt.forEach(word => {
        if(word.length > maxLetters) { //Checks if each word is longer that previous. 
            maxLetters = word.length // If the length of the each word in sentence is longer than 0....
            longest = word // The longest word is stored here.
        }
    });
    
    return longest
}

export { longestWord };
