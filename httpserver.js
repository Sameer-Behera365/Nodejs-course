const http = require("http");

const port = process.env.PORT || 2300;                //defines th port
const server = http.createServer((req, res) => {      //creates the server
  res.statusCode = 200; // ok
  res.setHeader("Content-Type", "text/html");
  res.end(
    "<h1> This is our http video </h1> <p> Hey this course is useful!! </p> "
  );
});
  
server.listen(port, () => {                           //starts the servee
  console.log(`Server is listening on port ${port}`);
});




/*

important:-

res.setHeader("Content-Type", "text/html");

in this If I write just "text/html" somewhere, but don’t use "Content-Type" as a header name  then ❌ it will NOT work.
because The browser only understands headers in key-value format like this:  res.setHeader("Content-Type", "text/html");

----->"Content-Type" is the key.
----->"text/html" is the value.


remember :---u need to mention the content type so that browser understand what type of content u are sending so that it will do proper rendering and display the content as u want like :----- i want in html way so it will display in that way   else it will display as plain text

Other common types:
Content-Type               	Meaning

text/html               	HTML page (render in browser)
application/json         	JSON data (used for APIs)
text/plain	                Plain text (no formatting)
image/png	                PNG image
application/javascript	    JavaScript code

*/









