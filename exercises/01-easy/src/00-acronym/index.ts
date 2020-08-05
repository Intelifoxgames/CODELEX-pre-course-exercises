/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string): string {
    
    return input.split(/[ \-_]+/) 
    // Splits string by first capital letters of each word and 
    // on a sequence of one or more commas or spaces and returns array.
    .map(word => word.charAt(0).toUpperCase()) 
    // Then each character is made to upper case.
    .join("") 
    // Then joined together to make acronym.
}

export { parse };
