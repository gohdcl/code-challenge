/*
Create a simple http server using node. *
This server should respond to a root-url request with a file called index.html.
Do not use ExpressJS. Your code should have error checking and at least one
callback. Put five or more html elements in your index.html.
One of the elements should be a link to an external page.
Things to research: node.js, callbacks, the fs module, the http module.
*/
var http = require("http"); // import http module
var fs = require("fs"); // import fs module
var url = require("url");

// create a http server; assign it to variable server
var server = http.createServer(function(request, response) {
    console.log(url.parse(request.url));
    var path = "./index.html";
    if(!path) { // if the file doesn't exist
      // return a 404 message
      response.writeHeader(404, { "Content-Type": "text/plain" });
      response.write("404 File Not Found\n");
      response.end();
    } /* end if */ else {
      fs.readFile(path, "binary", function(err, file) {
        if (err) { // if an error is thrown while reading the file
          // server responds with an error
          response.writeHeader(500, { "Content-Type": "text/plain" });
          response.write(err + "\n");
          response.end();
          } /* end if */ else { // else write the file
          response.writeHeader(200);
          response.write(file, "binary");
          response.end();
          } // end else
        }); // end .readFile
      } // end else
    } // end function
  ); // end .createServer
server.listen(3000);
console.log("node.js server active");
