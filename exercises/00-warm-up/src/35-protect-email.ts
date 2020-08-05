export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

function protectEmail(user_email: string):string {
    let avg: number, splitted: string[], part1: string, part2: string // Variables without a value.
    
    splitted = user_email.split("@") // Splits email in two arrays, before and after "@".
    
    part1 = splitted[0] // Assigns to part1 the first part of an email before "@".
    avg = part1.length / 1.75 // Assigns to avg a first part length divided by 2.
    
    part1 = part1.substring(0, (part1.length - avg)) // Changes the value of the part1 to a substring between 0 and the average length.
    part2 = splitted[1] // Assigns to part2 the second par of an email.
    return part1 + "...@" + part2 // Joins two parts together with dots and "@".
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
