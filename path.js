const path=require("path")

a=path.basename("c:\\temp\\myfile.html");
console.log(a);

b=path.dirname('/foo/bar/baz/asdf/quux');   //it removes the file name and gives you the folder path.
console.log(b);
 
c=path.extname('index.html');    //just gives extension
console.log(c); 


console.log(__filename);

d=path.extname(__filename);    //just gives extension
console.log(d); 


