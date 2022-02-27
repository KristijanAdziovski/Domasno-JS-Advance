function Library(name, books, address, numberOfMembers, printBooks) {
    this.nameLibrary = name;
    this.booksLibrary = books;
    this.addressLibrary = address;
    this.numberOfMembersLibrary = function numberOfMembers() {
        console.log(`Number of book * 15 is : ${this.booksLibrary.length * 15}`);
    }
    this.printBooksLibrary = function printBooks() {
        this.booksLibrary.forEach(p => console.log(p));
    }
}
let library = new Library("Library of Congress", ["War and Peace", "In Search of Lost Time", "Scareface", "Don Quixote"],"address of livraru");
console.log(library);
library.printBooksLibrary();
library.numberOfMembersLibrary();

function Book(title, genre, libraries, authosr, addLibrary, removeLibrary) {
    this.titleBook = title;
    this.genreBook = genre;
    this.librariesBook = libraries;
    this.authosrBook = authosr;
    this.addLibraryBook = function addLibrary(libraryes) {
        this.librariesBook.push(libraryes)
        library.booksLibrary.push(this.titleBook);
    };
    this.removeLibraryBook = function removeLibrary(remLibrary) {
        for(i=0;i<this.librariesBook.length;i++){
            if(remLibrary==this.librariesBook[i]){
                this.librariesBook.splice(i,1)
            }
        }
        for(i=0;i<library.booksLibrary.length;i++)
            if(this.titleBook==library.booksLibrary[i]){
                library.booksLibrary.splice(i,1);
            }
    }
}
let books=new Book("Title of book","Genre of book",["lib1","lib2","lib3","lib4"],["author1","author2","author3","author4"]);
console.log(books);
books.addLibraryBook("lib5");
console.log(books);
books.removeLibraryBook("lib5");
console.log(books);

function Author(firstName, lastName, yearOfBirth, books, currentBook, startBook) {
    this.firstNameAuthor = firstName;
    this.lastNameAuthor - lastName;
    this.yearOfBirthAuthor - yearOfBirth;
    this.booksAuthor = books;
    this.CurrentBookAuthor - currentBook;
    this.startBookAuthor = startBook;
}


