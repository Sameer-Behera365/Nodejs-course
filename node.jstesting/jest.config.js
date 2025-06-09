
//<rootDir> means:------👉 The main folder of your project--------------->(where your package.json is located)
//'<rootDir>/test/*.test.js' means: --------->   Look in the test folder        -and then---------->  Match files ending with .test.js
//  '<rootDir>/*.test.js'    means--------------> This tells Jest to look for test files in the root folder — like index.test.js.


module.exports = {
  testMatch: [                                     //testMatch : A Jest option to tell which files to test
    '<rootDir>/test/*.test.js'                       
]
};



 




// module.exports = {
//   testEnvironment: "node",
//   verbose: true,
//   testMatch: ["**/__tests__/**/*.test.js"], // Which test files to run
// };
 