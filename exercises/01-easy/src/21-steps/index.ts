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

function steps(lines: number) {
    for(let i = 1; i <= lines; i++){
        let char = ''
        // Initialize main line draw engine loop. Loop will generate...
        // ...lines as many times as stated in "lines" parameter.
        
        for(let j = 1; j <= i; j++){
            char += '#'
        }
        // Draws "#" as many times as "i" will loop till "lines" number.  

        for(let k = 1; k <= lines - i; k++){
          char += ' '
        }
        //Add the white space to the right after "#".

        console.log(char)
      }
}

export { steps }


