/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string): string {
    
    return input.split(/[ \-_]+/) 
    // Splits string with RegEx by first capital letters of each word,... 
    // ...ignoring commas or spaces and returns array.
    
    .map(word => word.charAt(0).toUpperCase()) 
    // Then each splitted single character is made to upper case.
    
    .join("") 
    // Then joined back together to make an acronym.
}

export { parse };
