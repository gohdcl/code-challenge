// Returns a string used to write HTML for an entire webpage into a file
module.exports = function htmlInject() {
  // note: it would be useful to figure out how to break this string into multiple
  // parts to make it more readable
  var htmlString = "<!DOCTYPE html><html><head><title>Code Fellows JavaScript Accelerator Coding Challenge | Daniel Goh</title></head><body><h1>Code Fellows JavaScript Accelerator Coding Challenge</h1><p>Hello There! This is my site is brought to you by my node.js server!</p><p>All the HTML has been written to index.html by the htmlInject.js module.</p><p><a href=\"http:\/\/www.google.com\">An external link to the Almighty Google</a></p><p><a href=\"https:\/\/powerful-plateau-3044.herokuapp.com/\">My web app made in JS Foundations II</a></p></body></html>";
  return htmlString;
};
