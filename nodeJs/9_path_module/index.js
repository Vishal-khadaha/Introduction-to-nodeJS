// TUe path module provides utilities for working with file and directory paths, It can be accessed using :   const path = require("path");

const path = require("path");
// console.log(path.dirname('C:/Users/ohn/Documents/coding/nodeJs/9_path_module/index.js'));
// console.log(path.extname('C:/Users/ohn/Documents/coding/nodeJs/9_path_module/index.js'));   // return extension
// console.log(path.basename('C:/Users/ohn/Documents/coding/nodeJs/9_path_module/index.js'));     // return file name

console.log(path.parse('C:/Users/ohn/Documents/coding/nodeJs/9_path_module/index.js'))         // return root, dir name, file name with extension, extension, file name

