const express = require("express");           // importing the Express framework into your file.
const app = express();                           
/*

✅ const app = express();   👉 You are creating an Express app.

This app will help you:

Create routes (app.get)
Start the server (app.listen)
Handle requests

🧠 Think of app like your server brain and   u can name anything app or munna

*/


const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Initial Page");                  //see here app.send is like app.end in node js not exactly like that but somewhat similar
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.listen(port, () => {
  console.log(`Example app is listening at ${port}`);
});


// so as u can see many line we write in node js but in less lines in express








/*

🧠 Summary: of res.end:-------------
Code	                What it does
res.end()      	      Ends the response (like saying “Done!”)
res.end("data")     	Sends data and ends response



res.send:------
res.send("Hello");
✅ res.send() is used to send a response to the browser.


*/

