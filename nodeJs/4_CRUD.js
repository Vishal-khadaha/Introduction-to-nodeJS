// Challenge Time 
                    // CRUD operation on file system

// 1: Create a folder named it Thapa
// 2: Create a file in it named Bio.txt and data into it. 
// 3: Add more data into the file at the end of the existing data. 
// 4: Read the data without getting the buffer data at first.
// 5: Rename the file name to myBio.txt 
// 6: now delete both the file and the folder 



const fs =require("fs");

// //1: create directory
// fs.mkdirSync("Thapa");
// 
// //2: create file
// fs.writeFileSync("Thapa/bio.txt","This is the part of CRUD operation on file system ");
// 
// //3: append
// fs.appendFileSync("Thapa/bio.txt"," -> That text is written from 4_CRUD.js file");
// 
// //4: Rename
// fs.renameSync("Thapa/bio.txt","Thapa/myBio.txt");
// 
// //5: Delete File
// fs.unlinkSync("Thapa/myBio.txt");
// 
// //6: Delete Directory Thapa
// fs.rmdirSync("Thapa");
// 
