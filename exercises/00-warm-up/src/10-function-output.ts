export {};

function s(w1: string, w2: string): string {
  return w1.concat(' ').concat(w2); // Concat merges two strings without mutating originals. 
  // In a parameter " " is a joining string (whitespace).
}

const result = s('hello', 'world'); // concatenate two strings - 'hello', 'world', using the function above
console.log(result); // Expected output: "hello world"
