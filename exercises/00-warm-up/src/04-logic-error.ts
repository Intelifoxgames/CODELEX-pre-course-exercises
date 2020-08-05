export {};

function trimWord(word: string): string {
  return word.trim(); // Trims folowing and trailing whitespaces from the string.
}

const result = trimWord("  CODELEX  "); // Save the function call to the constant.
console.log(result); // Expected output: "CODELEX"
