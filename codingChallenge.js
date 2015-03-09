/* Write a function that takes an array of data in the below format.
Assume that this function is run in a browser. It should update a
tag with id="awesome-index" with the average awesome-index of all programmers.
Your solution should continue to work even if more people are added to the array.
Write two versions, one using lodash (or underscore) and jQuery,
and one using only Javascript utilities native to the browser. *
[
{
name: 'Bob',
occupation: 'programmer',
awesomeIndex: 7,
},
{
name: 'Alice',
occupation: 'programmer',
awesomeIndex: 9,
},
{
name: 'Zaphod',
occupation: 'President of the Galaxy'
}
]
*/
// lodash + jQuery implementation
var _ = require("lodash"); // import lodash

var awesomeArray = [ // assign the array to the variable awesomeArray
  {
    name: 'Bob',
    occupation: 'programmer',
    awesomeIndex: 7,
  },
  {
    name: 'Alice',
    occupation: 'programmer',
    awesomeIndex: 9,
  },
  {
    name: 'Zaphod',
    occupation: 'President of the Galaxy' // note: not a programmer
  }
];

// a function for computing the average awesomeIndex of programmers
// takes an array of objects with occupation and awesomeIndex properties
function computeAverage (anArray) {
  var average, sum = 0, count = 0; // initialize variables
  anArray.forEach(function (object) {
    if (object.occupation === "programmer") {
      count++;
      sum += object.awesomeIndex;
    } // end if
  }); // end .forEach
  average = sum / count;
  return average;
} // end computeAverage

// insert the result of computeAverage on awesomeArray into the tag with ID
// awesome-index using a jQuery selector
$("#awesome-index").text(computeAverage(awesomeArray));
// plain JavaScript implementation

/*
Create a simple http server using node. *
This server should respond to a root-url request with a file called index.html.
Do not use ExpressJS. Your code should have error checking and at least one
callback. Put five or more html elements in your index.html.
One of the elements should be a link to an external page.
Things to research: node.js, callbacks, the fs module, the http module.
*/

/*
Model a library using objects. *
A library contains shelves. Shelves contain books. Books have an author and
a title. Give the library methods to add and remove a shelf. A shelf should have
methods to add/remove a book. Use a modular approach so that each type of object
is contained in its own file. Add any functionality you think appropriate.
*/
