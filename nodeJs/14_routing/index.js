// for routing the node js we use url module
// so we want to rout means jump on another path

//previous code 
// const http = require("http");
// const server= http.createServer((request,response)=>{
//     console.log(request.url);
//     if(request.url=="/")
//     {
//         response.end("Home Page");
//     }
//     else if(request.url=="/about")
//         {
//             response.end("about Page");
//         }
//     else if (request.url=="/contact")
//         {
//             response.end("contact Page");
//         }
//     else{
//         response.writeHead(404,{"Content-type":"text/html"});
//         response.end("<h1>404 page does not exist</h1>");
//     }
//     // console.log('Hello Boss This is Routing concept');
// });

// server.listen(2000);




// practice 31-05-2024

const http= require("http");
const server=http.createServer((request,response)=>
{
    // response.end("Hello boss");
    // console.log(request.url);

    if(request.url=="/")
        {
            response.end("<h1>Welcome to Homepage</h1>");
        }
    else if(request.url=="/about")
        {
            response.end("This is about page");
        }
    else if(request.url=="/contact")
        {
            response.end("This is Contact page");
        }
    else
        {
            response.writeHead(404,{"Content-type":"text/html"});
            response.end("<h1 style=color:red>page not Found</h1>");
        }
});

server.listen(4000);





























