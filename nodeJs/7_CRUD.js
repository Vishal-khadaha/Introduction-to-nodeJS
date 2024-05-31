// Challenge Time 
                    // CRUD operation on file system

// 1: Create a folder named it Thapa
// 2: Create a file in it named Bio.txt and data into it. 
// 3: Add more data into the file at the end of the existing data. 
// 4: Read the data without getting the buffer data at first.
// 5: Rename the file name to myBio.txt 
// 6: now delete both the file and the folder 


const fs = require('fs');

// // create directory
//
// fs.mkdir("7_Thapa",
//     (err)=>
//         {
//             console.log("Folder Created");
//         }
// );


// // crate File
//
// fs.writeFile("./7_Thapa/bio.txt","my name is thapa",
//     (err)=>
//         {
//             console.log("file created");
//         }
// );

// // append data
//
// fs.appendFile("./7_Thapa/bio.txt"," == This line is appended though appendFile",
// (err)=>
//     {
//         console.log("file appended !");
//     }
// );

// // read the data without getting buffer
// fs.readFile("./7_Thapa/bio.txt",'utf-8',
//     (err,data)=>
//         {
//             console.log(data);
//         }
// )

// // rename
// fs.rename("./7_Thapa/bio.txt","./7_Thapa/myBio.txt",
//     (err)=>
//         {
//             console.log("file renamed");
//         }
// )


// // delete
// fs.unlink("./7_Thapa/myBio.txt",
//     (err)=>
//         {
//             console.log("file deleted");
//         }
// )


// // remove directory
// fs.rmdir("./7_Thapa",(err)=>
//             {
//                 console.log("folder deleted");
//             });
