// json stand for javascript object notation
//its very lightweight for storing and transporting data
// JSON is often used when data is sent from a server to a web page.

const bioData=
{
    name:"vishal",
    age:23,
    channel:"thapa technical",
};
// console.log(bioData.channel);



// // method 1 : convert object into json

const jsonData= JSON.stringify(bioData);
// console.log(jsonData);  //  {"name":"vishal","age":23,"channel":"thapa technical"}
// console.log(jsonData.channel);// undefine



// method 2 : convert JSON data into Object data
const objData = JSON.parse(jsonData);
console.log(objData);       //  { name: 'vishal', age: 23, channel: 'thapa technical' }
console.log(objData.channel); //  thapa technical