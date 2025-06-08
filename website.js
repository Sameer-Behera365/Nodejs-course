console.log("Hello, Node.js!");

const user = { name: "Sameer", age: 23 };
console.table([user]);

console.time("MyTimer");
for(let i=0; i<1000000; i++) {}
console.timeEnd("MyTimer");

console.assert(user.age >= 18, "User must be adult");
