const { add, err, promiseTest } = require("../index"); //this is destructuring in javascript //this line Means you are now able to use these in your test or other file:    add();        -------------->   ➡️ err();      ------------------>promiseTest().then(...)       which are defined inindex.js


/*

✅ test("toBe", () => { ... })
This defines one test case.

"toBe" is just the name of the test — 

you can name it anything you like, 
for example "adds two numbers" or "checking add()".

*/


test("toBe", () => {     
  expect(add(12, 13)).toBe(25); //passed :------>   see here strictly equalls checks:---> Test passes because 25 === 25
});


test("toEqual", () => {
  expect(add(12, 14)).not.toEqual(26); //failed:----->  as we are getting 26 --->not keyword here means "I expect the result not to be 26."
});

test("toNull", () => {
  expect(add(1, 0)).not.toBeNull(); //passed:------>  as 1 +0 =1 so not null(0)--->so test passes
});

test("toBeGreaterThan", () => {
  expect(add(1, 4)).toBeGreaterThan(3); //passed:--------->  as 5>3
});

test("toBeLesserThan", () => {
  expect(add(1, 4)).toBeLessThan(1); //  failed:------------>  as 5<1  is incorrect
});


/*
------------------------------------------------------
.toMatch() accepts either a string or a RegExp.

expect(add("hello", "world")).toMatch("hello");
( OR )
expect(add("hello", "world")).toMatch(/hello/);
-------------------------------------------------------

What happens here:     expect(add("hello", "world")).toMatch(/hello/);

===>   add("hello", "world") concatenates the strings → "helloworld".
===>   .toMatch(/hello/) is a Jest string matcher that checks if the string contains a pattern matching the given regular expression.

Since "helloworld" contains "hello" at the start, the test passes.
-------------------------------------------------------------
*/

test("toMatch", () => {
  expect(add("hello", "world")).toMatch(/hello/); // passed: reason in the above box
});




/*
important:=========================================================================>

📌 1. What is the err function?

From your index.js:
const err = () => {
  throw new Error("this is a new error");
};

When you call err(), it throws an error.
The error message is: "this is a new error".



📌 2. Why expect(() => err())?

You don’t call err() directly — 
because it would throw the erro immediately before expect(...).toThrow(...) even runs.

Instead, you wrap it inside a function: () => err()
This tells Jest: “I'm going to test a function that should throw something.”


📌 3. What does .toThrow("this is a new error") do?
It checks if that function throws an error with the message: "this is a new error

=====================================================================================================
*/

test("toThrow", () => {
  expect(() => err()).toThrow("this is a new error"); // passed
});



describe("this is a block", () => {                       //passed
  test("this is executing in a block", () => {
    expect(() => err()).toThrow("this is a new error");
  });
});




//--------------------------important  test:-9,10,11----------------------

/*

Step-by-step working:
=====>Jest runs the test function.

=====>Inside  test, promiseTest(1, 2) runs.

=====>
Inside promiseTest:

calculates 1 - 2 = -1, which is not > 0, so it rejects the Promise with "-ve".

=====>Because promise is rejected, the .catch(e) callback runs with e = "-ve".

=====>Inside .catch(), Jest runs expect(e).toBe("-ve") → passes.

=====>But the test function itself does not return the Promise or wait for it to complete.

=====>So Jest does not wait for .then() or .catch() to finish — test may complete early.

=====>This leads to warnings or errors about unhandled Promise rejection, because Jest thinks the test is done before the Promise settles.

more better:----->

1)test function does NOT return the Promise or does NOT use async/await to wait for it, Jest will:

2)Run the test function and immediately think it’s done — without waiting for the Promise to finish.

3)Meanwhile, the Promise runs in the background and might reject or resolve after Jest already finished the test.

4)
Because of this, Jest doesn't catch the Promise rejection in time, which causes:
Warning messages or errors about "Unhandled Promise Rejection".
Your test might appear to pass or fail incorrectly, because Jest missed the Promise result.

*/





test("promiseTest",() => {                          //failed
  return promiseTest(1, 2)                             // i used return to prevent errors  
    .then((data) => {
      expect(data).toBe("+ve");
    })
    .catch((e) => {
      expect(e).toBe("-ve");
    }); 
});




/*

Step-by-step working:=====>

1) Jest runs this test as an async function.

2) It calls promiseTest(0, 2):

3) calculates 0 - 2 = -2, not > 0, so it rejects the Promise with "-ve".

4) .resolves.toBe("+ve") means Jest expects the Promise to resolve with "+ve".

5) But the Promise actually rejects.

6) Jest waits for Promise to settle because of await.

7) When it sees Promise rejected, but .resolves expected a resolution, it fails the test with an error.

8) So this test fails because your expectation (resolves to "+ve") does not match reality (Promise rejected with "-ve").

*/


test("promiseTest resolves", async () => {
  await expect(promiseTest(5, 2)).resolves.toBe("+ve");
});

test("promiseTest2 rejects", async () => {
  await expect(promiseTest(0, 2)).rejects.toBe("-ve");
});

test("promiseTest3 rejects again", async () => {
  await expect(promiseTest(1, 5)).rejects.toBe("-ve");
});








/*

✅ Yes, you can have the same test names in Jest — but it's not recommended.

🧪 Example:
--------------------------------------------------------
test("check addition", () => {
  expect(add(1, 2)).toBe(3);
});
------------------------------------------------------------
test("check addition", () => {
  expect(add(5, 7)).toBe(12);
});
--------------------------------------------------------------
✅ Jest will run both tests, even though they have the same name.


⚠️ Why it’s not recommended:
===>In the terminal or test reports, both tests will show up with the same name.
===>So if one fails, it will be hard to tell which one failed.
===>It becomes confusing for debugging and for teammates reading your code.

*/







/*
important:------------->

const { add, err, promiseTest } = require("../index");      //This is called destructuring assignment in JavaScript


--------------------------------------------------------------------------------------------
//u can write in in normal form also

const variable = require("../index"); 

// Import everything from ../index into one variable
const myModule = require("../index");

// Now use functions with the myModule prefix
test("toBe", () => {
  expect(myModule.add(12, 13)).toBe(25); // passed
});

test("toEqual", () => {
  expect(myModule.add(12, 14)).not.toEqual(26); // failed
});

test("toNull", () => {
  expect(myModule.add(1, 0)).not.toBeNull(); // passed
});

test("toBeGreaterThan", () => {
  expect(myModule.add(1, 4)).toBeGreaterThan(3); // passed
});

test("toBeLesserThan", () => {
  expect(myModule.add(1, 4)).toBeLessThan(1); // failed
});

test("toMatch", () => {
  expect(myModule.add("hello", "world")).toMatch(/hello/); // passed
});

test("toThrow", () => {
  expect(() => myModule.err()).toThrow("this is a new error"); // passed
});

describe("this is a block", () => {
  test("this is executing in a block", () => {
    expect(() => myModule.err()).toThrow("this is a new error");
  });
});

test("promiseTest", () => {
  myModule.promiseTest(1, 2)
    .then((data) => {
      expect(data).toBe("+ve");
    })
    .catch((e) => {
      expect(e).toBe("-ve");
    });
});

test("promiseTest2", async () => {
  await expect(myModule.promiseTest(0, 2)).resolves.toBe("+ve"); // failed
});

test("promiseTest3 reject", async () => {
  await expect(myModule.promiseTest(0, 2)).rejects.toBe("-ve"); // failed
});

==================================================================================================

*/