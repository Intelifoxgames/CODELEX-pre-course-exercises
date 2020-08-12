export {};

const removeFromArray = function(arr, ...args) { // ...args includes all elements in array.
    return arr.filter(element => args.indexOf(element) < 0)
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]



// Old sollution:
/* for(let i = 0; i < arr.length; i++) {
        
        if(arr[i] === intToRmvOne || intToRmvTwo) {
            arr.splice(i, 1) // Removing one element at index "i".
            i--
            // If arr[i] is equal to an argument of the item to remove, it is spliced... 
            // ...returning new array.
            return arr
        } else if(arr[i] === intToRmvOne && intToRmvTwo) {
            arr.splice(i, 1) // Removing one element at index "i".
            i--
            return arr
        }
    
    }

    
    return arr */

    /* Short sollution:
        return arr.filter(number => args.indexOf(number) < 0)
    */