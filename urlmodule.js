// // 1. with common js 




// example 1:----->
// // ✅ First import URL from the url module
// const { URL } = require('url');


// // ✅ Now use URL safely
// const myURL1 = new URL('https://example.com');   //making my own url
// myURL1.pathname = '/users';
// myURL1.searchParams.set('id', 123);
// console.log(myURL1.href); // https://example.com/users?id=123

// const myURL2 = new URL('https://example.com:8080/path?name=munna#top');
// console.log(myURL2.hostname);  // example.com
// console.log(myURL2.port);      // 8080
// console.log(myURL2.pathname);  // /path
// console.log(myURL2.search);    // ?name=munna
// console.log(myURL2.hash);      // #top






// example 2:-
// const myURL = new URL("https://example.org");

// myURL.pathname = "/a/b/c";
// myURL.search = "?d=e";
// myURL.hash = "#fgh";

// console.log(myURL);



















// ✅ 2. With ES Modules (only in .mjs or "type": "module")


// // Import URL from 'url' module using ESM import
// import { URL } from 'url';

// const myURL1 = new URL('https://example.com');
// myURL1.pathname = '/users';
// myURL1.searchParams.set('id', 123);
// console.log(myURL1.href); // https://example.com/users?id=123

// const myURL2 = new URL('https://example.com:8080/path?name=munna#top');
// console.log(myURL2.hostname);  // example.com
// console.log(myURL2.port);      // 8080
// console.log(myURL2.pathname);  // /path
// console.log(myURL2.search);    // ?name=munna
// console.log(myURL2.hash);      // #top
