export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */

function isBlank(str: string): boolean {
    return (!str || /^\s*$/.test(str)) // If there is no string or contains only spaces/is empty, returns true.
}

console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false
