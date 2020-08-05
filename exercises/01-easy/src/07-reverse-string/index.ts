/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str: string) {
    let rvrsStr = str.split("").reverse().join("") 
    // Splits the string and makes a new array, 
    // then reverses chars in array and joins back into a string.
    return rvrsStr
}

export { reverse };
