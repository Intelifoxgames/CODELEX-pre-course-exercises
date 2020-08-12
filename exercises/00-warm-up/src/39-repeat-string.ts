export {};

const repeatString = (string, count) => {
    return string.repeat(count)
    // Repeats the string as much as the "count".
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
