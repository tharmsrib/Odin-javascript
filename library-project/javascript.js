

function Book(bookTitle,author,numPage){
    //the constructor
    this.title=bookTitle;
    this.author=author;
    this.numPage=Number(numPage);
}

function addBookToLibraryArray(bookObj){
    //do stuff here
    myLibrary.push(bookObj);
}


function removeBookFromLibraryArray(bookCardElement){
    //take book card div and use it content (title,author and apge)
    //to filter myLibrary array of object
    let a = bookCardElement.querySelector('.bookContent');
    string = a.textContent;

    //find book title from book context tag
    let title = string.slice(0,string.indexOf(' by'));
    let author = string.slice(string.indexOf(' by')+4, string.indexOf(' number'));
    let numPage = Number(string.slice(string.indexOf(': ')+2));
    //filter mLibrary and replace new one
    myLibrary = myLibrary.filter((book)=>{
        if(book.title===title&&book.author===author&&book.numPage===numPage){
            //return false if its a match with a removing book
            return false;
        }
        return true;//return true to keep
        
    });
    console.log(myLibrary)
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
        // newBookDiv.classList.add(`card${i}`);       
        libraryDiv.appendChild(newBookDiv);
        i++;

    })
}

function displayLastBook(){
    let i = myLibrary.length -1;//-1 for the indexing
    //create element and add class and text to it
    const newBookDiv = createBookCardsElement(myLibrary[i]);
    // newBookDiv.classList.add(`card${i}`);       
    libraryDiv.appendChild(newBookDiv);
}


function createBookCardsElement(bookObj){
    //create div element and add book content to it
    let newBookCardDiv = document.createElement('div');
    newBookCardDiv.classList.add('bookCard');
    
    let a = document.createElement('a');
    a.classList.add('bookContent');
    a.textContent = `${bookObj.title} by ${bookObj.author} number pages: ${bookObj.numPage}`;
    newBookCardDiv.appendChild(a);
    //append read check box
    createChkBoxElement(newBookCardDiv);

    //append remove button
    createRemoveButton(newBookCardDiv);

    console.log(`creating div : `);
    console.log(newBookCardDiv);
    return newBookCardDiv;
}

function createChkBoxElement(parentElement){
    //parentElement = bookcard div
    //add unread calss as default
    parentElement.classList.add('unreadBook');
    //create input element
    let chkBox = document.createElement('input');
    chkBox.setAttribute('type','checkbox');
    chkBox.id = 'checkbox';
    let chkBoxLabel = document.createElement('label');
    chkBoxLabel.setAttribute('for','checkbox');
    chkBoxLabel.textContent = 'READ';
    //attach even listener
    chkBox.addEventListener('change',function(){
        if(this.checked){
            parentElement.classList.remove('unreadBook');
            parentElement.classList.add('readBook');
        }else{
            parentElement.classList.remove('readBook');
            parentElement.classList.add('unreadBook');
        }
    });
    parentElement.appendChild(chkBox);
    parentElement.appendChild(chkBoxLabel);

}


function createRemoveButton(parentElement){
    //parentElement = bookcard div
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn');
    removeBtn.textContent = 'X';
    //funct callback attachment
    removeBtn.addEventListener('click',()=>{
        console.log(`removing book`);
        //remove from display library
        parentElement.remove();
        //remove from array
        removeBookFromLibraryArray(parentElement);
        //

    })

    parentElement.appendChild(removeBtn);
}





let myLibrary = [];
const libraryDiv = document.querySelector('.library-container');
const newBookButton = document.querySelector('.newBookBtn');
const newBookDialog = document.getElementById('newBookDialog');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');

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
        addBookToLibraryArray(newBook);
        console.log('new book add')
        console.log(myLibrary);
            
        //reset dialog value
        document.getElementById('newBookForm').reset();
        
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
let bookA = new Book('Naruto','Masashi Kishimoto',1000);
let bookB = new Book('One Piece','Eiichiro Oda',3000);
addBookToLibraryArray(bookA);
addBookToLibraryArray(bookB);
displayBooks();



