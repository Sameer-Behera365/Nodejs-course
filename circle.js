//one example of commonJs

const { PI } = Math;
exports.area = (r) => PI * r ** 2;
exports.circumference = (r) => 2 * PI * r;




// ✅ const { PI } = Math; 

// — What is this?
// This is called destructuring in JavaScript.
// It’s a shortcut to get a specific value (like PI) from an object (like Math).

// normal way without destructuring
// const PI = Math.PI;

