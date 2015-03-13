// Returns a string used to write HTML into a file
module.exports = function htmlInject() {
  // note: find a way to break this string into multiple parts
  var htmlString = "<!DOCTYPE html><html><head><title>Code Fellows JavaScript Accelerator Coding Challenge | Daniel Goh</title></head><body><h1>Code Fellows JavaScript Accelerator Coding Challenge</h1><p>Hello There! This is my site is brought to you by my node.js server! All the HTML has been written to index.html by the htmlInject.js module.</p><a href=\"http:\/\/www.google.com\">An external link to the Almighty Google</a></body></html>";
  return htmlString;
};
