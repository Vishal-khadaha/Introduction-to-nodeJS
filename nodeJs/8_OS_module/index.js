//The os module provides operating system-related utility methods and properties. It can be accessed using:   const os = require("os");
// using os modules we can work with local system

const os = require("os");
// console.log(os.arch());

const freeMemory = os.freemem()
// console.log(freeMemory);         // it return the free memory in bytes
//console.log(`${freeMemory/1024/1024/1024}`);   // it return the free memory in GB

const totalMemory = os.totalmem();
// console.log(`${totalMemory/1024/1024/1024}`);       // it return the free memory in GB

// console.log(os.hostname());
// console.log(os.platform());

// console.log(os.tmpdir());

// console.log(os.type())    // which os is you are using currently