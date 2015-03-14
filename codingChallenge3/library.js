/*
Model a library using objects. *
A library contains shelves. Shelves contain books. Books have an author and
a title. Give the library methods to add and remove a shelf. A shelf should have
methods to add/remove a book. Use a modular approach so that each type of object
is contained in its own file. Add any functionality you think appropriate.
*/

function Library(name) {
  this.name = name; // the name of the library
  this.shelves = []; // shelves is an array of shelf objects; starts empty
} // end Library constructor

Library.prototype.addShelf = function() {
  this.shelves.push(new Shelf());
} // end addshelf
