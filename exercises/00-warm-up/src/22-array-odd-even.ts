export {};

function goThroughNumbers(start: number, end: number): void {
    var i = start
    
    while (i < end + 1) {
        if (i % 2 > 0) {
            console.log(`${i} - odd`) // If remainder of i is larger than 0, it is odd.
            i++
        } else if (i % 2 === 0){
            console.log(`${i} - even`) // If remainder is 0, it is even.
            i++
        } 
}

    if (start >= end) {
        console.log("invalid output")
}
}


goThroughNumbers(3, 7);
/* Expected output:

    > 3 - odd
    > 4 - even
    > 5 - odd
    > 6 - even
    > 7 - odd

*/

goThroughNumbers(8, 12);
/* Expected output:

    > 8 - even
    > 9 - odd
    > 10 - even
    > 11 - odd
    > 12 - even

*/

goThroughNumbers(4, 3);
// Expected output: 'invalid input*/
