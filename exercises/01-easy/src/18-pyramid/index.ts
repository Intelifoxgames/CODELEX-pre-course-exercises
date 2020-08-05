/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(lines: number) {
    
    // Initialize main line draw engine loop. Loop will generate lines as many times as stated in "lines".
    // E.g. if pyramid(2), loop will run next three sub-loops 2 times to populate with chars 2 lines. 
    // Starts with an empty string.

    for(let i = 1; i <= lines; i++) {
        let char = ""
        
        // Adds whitespace to the left side of the #.
        
        for(let k = 1; k <= (lines - i); k++){
            char += ' '
          }

          // Draws # after the whitespace.
          // E.g. if pyramid(2), while "j" is NOT 2 * i - 1 = 2 * 2 - 1 = 3 <===== char will draw the 3 times.
          for(let j = 0; j != (2 * i - 1); j++){
            char += '#'
          }
          
          // Adds whitespace to the left right of the #.

          for(let k =  i + 1; k <= lines; k++){
            char += ' '
          }
          console.log(char)
    } 

}


export { pyramid }

/*
let char = ""
    for (let i = 0; i <= n; i++) {
    char = char + "#"
    console.log(char)
    */