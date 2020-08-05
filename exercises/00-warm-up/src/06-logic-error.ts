export {};

function trimWord(word: string): string {
  return word.trim(); // Trims folowing and trailing whitespaces from the string.
}

const result = trimWord("  CODELEX ");
console.log(result); // Expected output: "CODELEX"
