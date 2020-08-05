export {};

const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];

const showStatus = (book) => {
  for(let i = 0; i < book.length; i++) {
    if (book[i].isRead === true) {
      console.log(`Already read '${book[i].title}' by ${book[i].author}.`)
    } else if (book[i].isRead === false) {
      console.log(`You still need to read '${book[i].title}' by ${book[i].author}.`)
    }
  }
};

showStatus(library);

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/