// console.log("im sameer kumar behera and hello is node.js")
// let a=10;
// console.log(1+a);
// a=12
// console.log(a);




const myName = require("./another");   //here thsi function is for obtaining a file like from another.js will be stored in this u can use let, var whatever
console.log(myName);                    
// console.log("hello",role);              //see this way u will get error as even though role is present in object but u can access role directly like this
console.log("hello",myName.role);



