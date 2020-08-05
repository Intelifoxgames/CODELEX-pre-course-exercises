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
    let max = 0
    let target = ""
    str.split('') // Input string is split by chars.
    .forEach((char) => {  // For each char in string.
        if(str.split(char).length > max) { // If splitted chars length is more than 0.
            max = str.split(char).length; // Max is equal to splitted char length.
            target = char; // Char is equal to target (commonly used) char.
         }
      });
      return target;
}

export { maxChar };
