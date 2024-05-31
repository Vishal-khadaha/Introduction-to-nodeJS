const fs = require('fs');

// Synchronous Way
//
// const data=fs.readFileSync("read.txt","utf-8");
// console.log(data);
// console.log("after the data");
//
//


// Asynchronous Way
//
// fs.readFile("read.txt",'utf-8',
//     (err,response_data)=>
//         {
//             console.log(response_data);
//         }
// )
// console.log("after the data");

