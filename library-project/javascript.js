

function Book(bookName){
    //the constructor
    this.name=bookName;
    // this.author=author;
    // this.numPage=numPage;
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
function displayBooks(){
    let i =0;
    myLibrary.forEach(function (book){
        //create element and add class and text to it
        
        console.log(book);
        const newBookDiv = createBookCardsElement(book);
        newBookDiv.classList.add(`card${i}`);       
        libraryDiv.appendChild(newBookDiv);
        i++;

    })
}

function createBookCardsElement(bookObj){
    //create div element and add book content to it
    let newDiv = document.createElement('div');
    let a = document.createElement('a');
    newDiv.classList.add('bookCard');
    a.classList.add('bookContent');
    a.textContent = bookObj.name;
    // a.textContent = 'hahaa';
    newDiv.appendChild(a);
    console.log(newDiv)
    return newDiv;
}


const myLibrary = [];
const libraryDiv = document.querySelector('.library-container');
//manual book
let bookA = new Book('a');
let bookB = new Book('b');
addBookToLibrary(bookA);
addBookToLibrary(bookB);
displayBooks();



