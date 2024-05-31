const character={
    name:"Arjun",
    role:"Dhanordhar",
    wife:3
};

// console.log(character);
// console.log(JSON.stringify(character));

//demo task 
// 1: convert to JSON
// 2: dusre file me add kr dena 
// 3: readfile 
// 4: again convert JSON to object data 
// 5: console.log 


//1
const jsonData = JSON.stringify(character);     
//2
const fs = require("fs");
fs.writeFile("practice.json",jsonData,(err,data)=>
{
    // console.log(data);

//3 
    fs.readFile("practice.json","utf-8",(err,data)=>
    {
        // console.log(data);

        //4
        const originalData=JSON.parse(data);
        console.log(originalData);
    })
})

