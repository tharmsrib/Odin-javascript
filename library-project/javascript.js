

function Book(bookName,author,numPage){
    //the constructor
    this.name=bookName;
    this.author=author;
    this.numPage=numPage;
}

function addBookToLibrary(bookObj){
    //do stuff here
    myLibrary.push(bookObj);
}

// Write a function that loops through the array and 
// displays each book on the page. You can display 
// them in some sort of table, or each on their own 
// “card”. It might help for now to manually add
//  a few books to your array so you can see the display.


const myLibrary = [];
const libraryDiv = document.querySelector('library-container');

