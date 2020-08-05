/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number) {
    for(let i = 1; i <= n; i++){
        let char = ''
        
         // Adds whitespace to the left side of the #.
        // Draws whitespace the requirement that the main engine loop.
        for(let j = 1; j <= i; j++){
            char += '#'
        }

        //Add the white space to the right.
        for(let k = 1; k <= n - i; k++){
          char += ' '
        }

        console.log(char)
      }
}

export { steps }


