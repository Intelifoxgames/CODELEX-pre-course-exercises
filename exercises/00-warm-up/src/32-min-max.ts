export {};

const min = array => {
    return Math.min(...array) // Returns a minimum item from all array items.
};

const max = array => {
    return Math.max(...array) // Returns a maximum item from all array items.
};

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
