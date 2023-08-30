function bookObj(bookName,author,numPage,read){
    this.name=bookName;
    this.author=author;
    this.numPage=numPage;
    this.readYet = read ? 'read already':'not read yet';
    this.info = function(){
        let output = this.name +' by '+this.author+', '+this.numPage + ', '+ this.readYet;
        return output
    }
}