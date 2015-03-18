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

// plain JavaScript implementation

// a function for computing the average awesomeIndex of programmers
// takes an array of objects with occupation and awesomeIndex properties
function computeAverage (anArray) {
  var average, sum = 0, count = 0; // initialize variables
  anArray.forEach(function(object) {
    if (object.occupation === "programmer") {
      count++;
      sum += object.awesomeIndex;
    } // end if
  }); // end .forEach
  average = sum / count;
  return average;
} // end computeAverage

// display the awesomeIndex in the tag with ID awesome-index
document.getElementById("awesome-index").textContent = computeAverage(awesomeArray);



