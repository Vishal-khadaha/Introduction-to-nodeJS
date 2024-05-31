// The http.createServer() method includes request and response parameters which is supplied by Node JS.

//The request object can be used to get information about the current HTTP request.
//e.g : url, request header, and data

//The response object can be used to send a response for a current HTTP request.

//If the response from the HTTP server is supposed to be displayed as HTML,
//you should include an HTTP header with the correct content type:





//today we will use http module
// const http = require("http");

// const server = http.createServer((request,response)=>{
//     response.end("hello from the others sides");
// });

// server.listen(8000,"127.0.0.1");



// practice 2
const http =  require("http");
const server=http.createServer((request,response)=>
{
    response.end("hello bhai again !");
})

server.listen(4000);