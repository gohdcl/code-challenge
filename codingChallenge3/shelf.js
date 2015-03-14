function Shelf() {
  this.books = [];
} // end shelf constructor

Shelf.prototype.addBook = function(title, author) {
  var newBook = new Book(title, author);
  this.books.push(newBook);
} // end addBook

