

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
function displayBooks(){
    let i =0;
    myLibrary.forEach(function (book){
        //create element and add class and text to it
        
        // console.log(book);
        const newBookDiv = createBookCardsElement(book);
        newBookDiv.classList.add(`card${i}`);       
        libraryDiv.appendChild(newBookDiv);
        i++;

    })
}

function displayLastBook(){
    let i = myLibrary.length -1;//-1 for the indexing
    
    
    //create element and add class and text to it
    // console.log(book);

    const newBookDiv = createBookCardsElement(myLibrary[i]);
    newBookDiv.classList.add(`card${i}`);       
    libraryDiv.appendChild(newBookDiv);



}

function createRemoveButton(parentElement){
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn');
    removeBtn.textContent = 'X';
    //funct callback attachment
    removeBtn.addEventListener('click',()=>{
        parentElement.remove();
    })

    parentElement.appendChild(removeBtn);
}

function createBookCardsElement(bookObj){
    //create div element and add book content to it
    let newDiv = document.createElement('div');
    let a = document.createElement('a');
    newDiv.classList.add('bookCard');
    a.classList.add('bookContent');
    a.textContent = `${bookObj.name} by ${bookObj.name} number pages: ${bookObj.numPage}`;
    newDiv.appendChild(a);
    //append read check box


    //append remove button
    createRemoveButton(newDiv);
    
    
    console.log(`creating div : `);
    console.log(newDiv);
    return newDiv;
}

function removeAllBooks(){
    //remove all childs of libraryDiv
    while (libraryDiv.firstChild) {
        libraryDiv.removeChild(libraryDiv.lastChild);
    }
}


const myLibrary = [];
const libraryDiv = document.querySelector('.library-container');
const newBookButton = document.querySelector('.newBookBtn');
const newBookDialog = document.getElementById('newBookDialog');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');
//add these elements but not append to any parent yet until function is called
// const removeBtn = document.createElement('button');
// removeBtn.classList.add('removeBtn');
const readChkBox = document.createElement('input');
readChkBox.setAttribute('type','checkobox');
readChkBox.classList.add('readChkBox');

//newBook button opens dialog modally
newBookButton.addEventListener("click",()=>{
    newBookDialog.showModal();
})


// Prevent the "confirm" button from the default behavior 
//of submitting the form, and close the dialog with 
//the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
    
    //create new book Object
    let title = document.querySelector('#newBookTitle').value;
    let author = document.querySelector('#newBookAuthor').value;
    let numPage = document.querySelector('#newBookNumPage').value;
    if(title!='' && author!=''&&numPage!=null ){
        //create new book object
        let newBook = new Book(title,author,numPage);
        console.log(`new book object: `);
        console.log(newBook);
        //add new book to library array
        addBookToLibrary(newBook);
        console.log('new book add')
        console.log(myLibrary);
            
        confirmBtn.value = 'submit';
        event.preventDefault(); // We don't want to submit this fake form
        newBookDialog.close(confirmBtn.value); // Have to send the select box value here.
    
    }
    


});

cancelBtn.addEventListener("click", ()=>{
    newBookDialog.close('cancel');
})

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
newBookDialog.addEventListener("close", () => {
    //check if cancel or confirm button pushed
    console.log(newBookDialog.returnValue)
    if(newBookDialog.returnValue==='default'){
        console.log('no return value');
    }else if(newBookDialog.returnValue==='cancel'){
        console.log('cancel');
    }else if(newBookDialog.returnValue==='submit'){
        //display new one
        console.log('display');
        // removeAllBooks();
        displayLastBook();

    }
    

});

//manual book
let bookA = new Book('a','gg',3);
let bookB = new Book('b','gg',3);
addBookToLibrary(bookA);
addBookToLibrary(bookB);
displayBooks();



