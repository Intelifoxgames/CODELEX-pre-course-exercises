export {};

const books = [
  {
    title: "4 hour work week",
    author: "Tim Ferris"
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris"
  }
];


const getTheTitles = (arr): string[] => {
  
  const arrOfTittle = arr.map(books => books.title) // Extracts the title of each book.
  return arrOfTittle

}


console.log(getTheTitles(books)); // Expected output: ['4 hour work week', 'Tools of Titans']
