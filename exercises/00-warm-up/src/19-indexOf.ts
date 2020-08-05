export {};

/**
 * Write a function that removes an element form array.
 * The function must:
 *  - NOT change the original array
 *  - return a new array with the first item matching `valueToRemove` removed
 */

// You are allowed to edit only this function
function remove(arr: any[], valueToRemove): any[] {
  const copiedArr = [...arr] // Whole aray spread.
  const removed = copiedArr.splice(arr.indexOf(valueToRemove), 1) // At the index of value to remove, remove 1 item from thr array.
  return copiedArr
}

const numbers = [1, 2, 3];
const names = ["John", "Alice", "Ellen"];

const newNumbers = remove(numbers, 2);
const newNames = remove(names, "Ellen");

console.log(newNumbers);
console.log(newNames);

/* 
  Expected output:
  
      [1, 3]
      [John, Alice]
*/
