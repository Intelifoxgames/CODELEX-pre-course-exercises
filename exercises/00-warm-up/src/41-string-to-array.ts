export {};


const stringToArray = (str) => {
    return str[0].split(" ") 
    // Splits string at the whitespace between them.
    // Returns new array.
}

console.log(stringToArray(["John Doe"])); // Expected output: ['John', 'Doe']
