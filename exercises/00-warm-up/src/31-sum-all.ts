export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */


 


const sumAll = function(int1, int2) {
    const arr = [1, 2, 3, 4]
    const reducer = (accumulator, currentValue) => accumulator + currentValue // Accumulates the value and store the sum in the reducer.
    return arr.reduce(reducer)
};

console.log(sumAll(1, 4)); // Expected output: 10
