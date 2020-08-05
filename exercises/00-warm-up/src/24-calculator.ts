export {};

function add(firstInt, secondInt) {
    return firstInt + secondInt
}

function subtract(firstInt, secondInt) {
    return firstInt - secondInt
}

function sum([firstInt, secondInt, thirdInt]) {
    return firstInt + secondInt + thirdInt
}

function multiply([firstInt, secondInt, thirdInt]) {
    return firstInt * secondInt * thirdInt
}

function power(firstInt, secondInt) {
    return Math.pow(firstInt, secondInt)
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
