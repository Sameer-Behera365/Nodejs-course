//a samll project on routing
/*
If you open:
🔗 http://localhost:3000/ → You see the Home Page

If you open:
🔗 http://localhost:3000/About → You see the About Page

If you open:
🔗 http://localhost:3000/Link → You see the Links Page

If you open anything else (like /xyz):
❌ You see a 404 Not Found Page


*/





const http = require("http");  // Import HTTP module

const port = process.env.PORT || 3000;  // Define the port

const server = http.createServer((req, res) => {
  console.log(req.url);  // requested url is displayesd like on which page user is at present now

  res.setHeader("Content-Type", "text/html");  // Set response type as HTML

  if (req.url === "/") {
    res.statusCode = 200;
    res.end(`
      <h1>Welcome to the Homepage</h1>
      <p>This is the root route ("/")</p>
    `);
  } 



  
  else if (req.url === "/About") {
    res.statusCode = 200;
    res.end(`
      <h1>About Page</h1>
      <p>This is the About section of the site.</p>
    `);
  } 
  
  
  
  
  
  else if (req.url === "/Link") {
    res.statusCode = 200;
    res.end(`
      <h1>Links</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Link">Link</a></li>
      </ul>
    `);
  } 
  
  
  
  
  else 
  {
    res.statusCode = 404;
    res.end(`
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    `);
  }
});



server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});





/*

📌 In Simple Words:   use of backticks(``)
Symbol                 	Can write in many lines?	      Can use variables like ${name}?
' or " (quotes)	               ❌ No	                     ❌ No
` ` (backticks)	               ✅ Yes	                 ✅ Yes


*/

