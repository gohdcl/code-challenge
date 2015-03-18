/*
library.js, shelf.js, and book.js in a single file for testing purposes
*/

function Library(name) {
  this.name = name; // the name of the library
  this.shelves = []; // shelves is an array of shelf objects; starts empty
} // end Library constructor

Library.prototype.addShelf = function(name) {
  this.shelves.push(new Shelf(name));
} // end addShelf

Library.prototype.removeShelf = function(searchKey) {
  // loop through each shelf in the this.shelves array
  for(var i = 0; i < this.shelves.length; i++) {
    if(this.shelves[i].name === searchKey) {
      console.log(this.shelves[i].name + " is being removed"); // confirm the shelf is being removed
      this.shelves.splice(i, 1); // remove it from the array
    } // end if
  } // end for
} // end removeShelf

// end library.js

// Shelf object constructor
function Shelf(name) {
  this.name = name;
  this.books = []; // initializes as an empty shelf
  this.numberOfBooks = this.books.length; // keep track of the number of books
} // end shelf constructor

// adding a book
Shelf.prototype.addBook = function(title, author) {
  this.books.push(new Book(title, author));
  this.numberOfBooks++;
}; // end addBook

// removing a book
Shelf.prototype.removeBook = function(searchKey) {
  // loop through all books in the this.books array
  for(var i = 0; i < this.books.length; i++) {
    // if a book with a title or author matching the searchKey is found
    if (this.books[i].title === searchKey || this.books[i].author === searchKey) {
      console.log(this.books[i].title + " is being removed"); // confirm the book is being removed
      this.books.splice(i, 1); // remove it from the array
      this.numberOfBooks--;
    } // end if
  } // end for
}; // end removeBook

// end shelf.js

// Book object constructor
function Book(title, author) {
  this.title = title;
  this.author = author;
} // end book constructor

// end book.js

// tests
library = new Library("Seattle Public Library"); // library constructor call
console.log(library);
library.addShelf("Fiction"); // library.addShelf() call
console.log(library);
library.shelves[0].addBook("Harry Potter", "J.K. Rowling"); // shelf.addBook() and book constructor call
console.log(library);
console.log(library.shelves[0].books[0]);
library.shelves[0].removeBook("Harry Potter"); // shelf.removeBook() call
console.log(library.shelves[0]);
library.removeShelf("Fiction"); // library.removeShelf() call
console.log(library);
