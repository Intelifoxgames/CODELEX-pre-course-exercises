export {};

function trim(word: string): string {
  return word.trim(); // Trims folowing and trailing whitespaces from the string.
}

const result = trim("CODELEX  ");
console.log(result); // Expected output: "CODELEX"

