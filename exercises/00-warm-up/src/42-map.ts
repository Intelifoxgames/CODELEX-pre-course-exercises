export {};

function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1) 
  // Capitalizes first letter of each string.
  // + ads the portion of string after capital letter.
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = mentors.map(tidyUpString).map(capitalise) 
// Callback of "capitalise().
// You are allowed to edit this line



console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]