export {};

function truncateString(string: string, places: number): string {
    return string.substring(0, places) // Returns a part of the string. .substring(startIndexFrom0), endIndex).

    // Alternate return string.slice(0, 4)
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
