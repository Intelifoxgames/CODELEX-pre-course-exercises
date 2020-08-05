/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]) {
    array.sort((a,z) => a - z).pop()
    // Sort numbers in array from the smallest to the largest.
    // Then pop out the last and largest number from the array.
    
    console.log(array)

    // The last number after pop is the (second) largest number. Return the number.
    return Math.max(...array)

    // Alternate sollution: "return array.pop()", 
    // which will return the last number, 
    // which is the (second) largest.


}

export { secondLargest };
