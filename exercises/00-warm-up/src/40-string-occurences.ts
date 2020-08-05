export {};

const count = (string, string2) => {
    
    const text = string // Tthe text where string occurrences will be counted.
    const regExp = new RegExp(string2, "gi") 
    // Creates a new RegExp with a value of searching globally and insesitively 
    // the string to count ("string2").
    
    
    const count = (text.match(regExp)).length 
    // Match with regExp will return the length of newly created array with words from "text" that matches with "string2".

    return count

};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1


/* OLD SOLLUTION:

const count = (string, string2) => {
    string += " "
    string2 += " "

    if (string2.length <= 0) {
        return string.length + 1
    }

    string2 = string2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // Escapes the string.
    return (string.match(new RegExp(string2, 'gi')) || []).length
    // g modifier: global. All matches (don't return on first match).
    // i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z]).

};*/