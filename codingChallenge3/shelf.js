// Shelf object constructor
function Shelf(name) {
  this.name = name;
  this.books = []; // initializes as an empty shelf
  this.numberOfBooks = this.books.length; // keep track of the number of books on the shelf
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
