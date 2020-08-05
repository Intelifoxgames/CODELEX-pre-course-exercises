export {};

function onlyTheAces(arr: string[]): string[] {
   let newArr = []
   for(let i = 0; i < arr.length; i++) {
       if(arr[i] === 'Ace') {
           newArr.push('Ace') // If "i" is equal to "Ace", the "i" will be pushed to the new array.
       }
   }
   return newArr
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']