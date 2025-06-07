//----------------------reading files


// fs.readFile

// const fs=require('fs');
//without error
// fs.readFile('file.txt','utf8', (err,data)=>{
//     console.log(err,data);
//     console.log(data);
// })


//with error
// const fs=require('fs');

// fs.readFile('file2.txt','utf8', (err,data)=>{
//     console.log(err,data);
// })
// console.log("read execution finished");








//fs.readFileSync


// const fs = require('fs');
// console.log('Starting file read...');

// try {
//   // Read existing file synchronously
//   const content = fs.readFileSync('file.txt', 'utf8');
//   console.log('File content:', content);
// } catch (err) {
//   console.error('Error reading file.txt:', err.message);
// }

// try {
//   // Try reading a non-existent file to show error handling
//   const missingContent = fs.readFileSync('file2.txt', 'utf8');
//   console.log('File2 content:', missingContent);
// } catch (err) {
//   console.error('Error reading file2.txt:', err.message);
// }
// console.log('Finished reading files.');

 


//other way of showing  fs.readFileSync

// const fs = require('fs');
// const a = fs.readFileSync("file.txt");
// console.log(a.toString());      //because we get a buffer or string we dont know from th function return so we converted to string
// console.log("read execution finished");






//-------------------------------------writing the files(overwriting the content)


// ✅ Using fs.writeFile (asynchronous)

// const fs = require('fs');

// const content = 'This is the content to write into the file.';

// fs.writeFile('output.txt', content, (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//   } else {
//     console.log('File has been written successfully.');
//   }
// });




// const fs = require('fs');

// const content = 'This is the laliga';

// fs.writeFile('file.txt', content, (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//   } else {
//     console.log('File has been written successfully.');
//   }
// });





// const fs = require('fs');
// fs.writeFile('file.txt', 'Hello', (err) => {
//   if (err) console.error(err);
//   else console.log('File written');
// });
// console.log('After write');




// ✅ Using fs.writeFileSync (synchronous)

const fs = require('fs');

const content = 'This is the new content to write into the file.';              //important:-  Yes — if you don’t define what to write (i.e., pass undefined or nothing as content), it can also cause issues.
   
try {
  fs.writeFileSync('output.txt', content);
  console.log('File has been written successfully.');
} catch (err) {
  console.error('Error writing file:', err);
}








