const fs = require("fs");

const bioData = {
    name:"Vishal",
    age:23,
    role:"MERN Stack Developer"
};
// console.log(bioData.role);


// //demo project
// 1: convert to JSON
// 2: dusre file me add kr dena 
// 3: readfile 
// 4: again convert JSON to object data 
// 5: console.log 


const jsonData = JSON.stringify(bioData);      //1:
fs.writeFile("json1.json",jsonData,(err)=>      //2: 
{
    // console.log("You are done");
})
fs.readFile("json1.json","utf-8",(err,data)=>    //3:
{
    // console.log(data);
    const orgData = JSON.parse(data);               //4:
    console.log(orgData);                       // 5:
})
