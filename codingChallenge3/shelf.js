function Shelf() {
  this.books = [];
} // end shelf constructor

Shelf.prototype.addBook = function(title, author) {
  var newBook = new Book(title, author);
  this.books.push(newBook);
} // end addBook

Shelf.prototype.removeBook = function(searchKey) {
  // loop through all books in the this.books array
  this.books.forEach(book) {
    // if a book with a title or author matching the searchKey is found
    if (book.title === searchKey || book.author === searchKey) {
      console.log(book.title + " is being removed"); // confirm the book is being removed
      var index = this.books.indexOf(book); // get the index of the book
      if (index > -1) { // index should not be negative
        this.books.splice(index, 1); // remove it from the array
      } // end if
    } // end if
  }
}; // end removeBook
