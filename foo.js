//foo.js and we are connecting circle.js

const circle = require('./circle.js');

console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);



// console.log(circle.PI); // ❌ This will not work as PI is used only inside circle.js, so it is private.
//remember :-

// ✅ Only exported things can be used outside
// like:-

// exports.area = (r) => PI * r ** 2;
// But we did not do:

// exports.PI = PI; // ❌ we didn't do this  so we cant use it

