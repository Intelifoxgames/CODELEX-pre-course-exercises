export {};

const removeFromArray = function(arr = [0], intToRmvOne = 0, intToRmvTwo = 0) { // Or "...args" instead of both intToRmv.
    for(let i = 0; i < arr.length; i++) {
        // If arr[i] is equal to an argument of the item to remove, it is spliced.
        if(arr[i] === intToRmvOne || intToRmvTwo) {
            arr.splice(i, 1)
            i--
        }
    }
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]
