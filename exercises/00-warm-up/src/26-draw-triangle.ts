export {};



function draw(n: number): void {
  let char = ""
  for (let i = 0; i < n; i++) {
    char = char + "*" // Inserts the "*" to the char as many times as the argument asks to.
    console.log(char)
}
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
