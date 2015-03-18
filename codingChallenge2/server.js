/*
Create a simple http server using node. *
This server should respond to a root-url request with a file called index.html.
Do not use ExpressJS. Your code should have error checking and at least one
callback. Put five or more html elements in your index.html.
One of the elements should be a link to an external page.
Things to research: node.js, callbacks, the fs module, the http module.
*/

/*
Note: This file must be run inside its working directory. Running it from
outside its directory results in a status code 500 error.
*/
var http = require("http"); // import http module
var fs = require("fs"); // import fs module
var url = require("url");
var htmlInject = require("./htmlInject.js");
var port = process.env.PORT || 3000;
var path;

fs.writeFile("index.html", htmlInject(), function(err) {
  if (err) { // if an error is thrown
    return console.log(err); // print the error to console log
  } // end if
  console.log("htmlInject.js > test.html"); // confirmation log
});

// create a http server; assign it to variable server
var server = http.createServer(function(request, response) {
    var reqURL = url.parse(request.url);

    if(reqURL.path === "/") { // if root-url is requested
      path = "./index.html";
    } /* end if */ else { // a different url was requested or index.html does not exist
      // return a 404 message
      path = ""; // path must be a string, so empty string if a different url is requested
      response.writeHeader(404, { "Content-Type": "text/plain" });
      response.write("404 File Not Found\n");
      response.end();
    }
    fs.readFile(path, "binary", function(err, file) {
      if (err) { // if an error is thrown while reading the file
        // server responds with an error
        response.writeHeader(500, { "Content-Type": "text/plain" });
        response.end("500 An Error Occurred");
        } /* end if */ else { // else write the file
        response.writeHeader(200);
        response.write(file, "binary");
        response.end();
        } // end else
      }); // end .readFile
    }); // end .createServer
server.listen(port); // the server listens on port specified by variable port
console.log("node.js server active"); // display a console message that the server is live
