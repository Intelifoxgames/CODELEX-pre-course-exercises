export {};

function concatenate(firstWord: string, secondWord: string, thirdWord: string): string {
  return firstWord.concat(' ').concat(secondWord).concat(' ').concat(thirdWord)
  // Concat merges two strings without mutating originals. 
  // In a parameter " " is a joining string (whitespace).
}

const result = concatenate("Hello", "from", "CODELEX");
console.log(result); // Expected output: "Hello from CODELEX"
