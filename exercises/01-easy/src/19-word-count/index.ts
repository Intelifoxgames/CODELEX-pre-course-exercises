/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str: string) {

    const spltStr = str.trim().split((/\s+/)) 
    // Trims the string from leading and trailing whitspaces,
    // & splits each word into the array.
    
    let count = Object.create(null)
    // Creates an empty object.
    

    console.log(spltStr)
    /* splitStr =  
    ['one',  'fish',
      'two',  'fish',
      'red',  'fish',
      'blue', 'fish'] */
    
    
      for(let i = 0; i < spltStr.length; i++) { 
      let word = spltStr[i].toLowerCase()
      // Each word of the string makes lower case.

      if(!count[word]) {
        count[word] = 1
        // If word is not in the count object, it is solo.
      } else {
        count[word]++
        // Else, if it is present in the object, word gets + 1 count.
      }
    }

    return count

    

  }
}

export { Words };
