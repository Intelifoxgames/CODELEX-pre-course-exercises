export {};


const stringToArray = (str) => {
    return str[0].split(" ") // Splits after the first string with a whitespace.
}

console.log(stringToArray(["John Doe"])); // Expected output: ['John', 'Doe']
