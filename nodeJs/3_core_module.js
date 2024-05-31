// Node.js has a set of built-in modules which you can use without any further installation.




//today's our first Module to learn is fs




// // 1 create a new file
// 
const fs =require("fs");
// // fs.writeFileSync("read.txt","Hello this file is created from 3_core_module ");
// fs.writeFileSync("read.txt","hey there - this file is created from 3_core_module ");



// // 2 append text on created file
//
// fs.appendFileSync("read.txt"," and this line appended though the fs.appendFileSync function");



// // 3 read content of file
//
const content=fs.readFileSync("read.txt");
// console.log(content);                   // it print Buffer data only not text value and the buffer is an additional data type to store binary data
console.log(content.toString());           // this line will print text value



// // 4 rename the file
//
fs.renameSync("read.txt","readWrite.txt");

