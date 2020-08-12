/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) {
    let crntActlLngth = 0
    let actlMaxChar = ""
    str.split('') 
    // Input string is split by chars.
    
    .forEach((char) => {  
        // For each char in string.
        
        if(str.split(char).length > crntActlLngth) { 
            // If char's length is more than current actual length...
            
            crntActlLngth = str.split(char).length 
            // Iterated char's length is equal to current actual length.
            
            actlMaxChar = char 
            // And actual char is saved.
         }
      });
      return actlMaxChar
}
export { maxChar };
