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

Library.prototype.addShelf = function(name) {
  this.shelves.push(new Shelf(name));
}; // end addShelf

Library.prototype.removeShelf = function(searchKey) {
  // loop through each shelf in the this.shelves array
  for(var i = 0; i < this.shelves.length; i++) {
    if(this.shelves.name === searchKey) {
      console.log(this.shelves[i].name + " is being removed"); // confirm the shelf is being removed
      this.shelves.splice(i, 1); // remove it from the array
    } // end if
  } // end for
}; // end removeShelf
