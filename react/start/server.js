 ///server apna ban gaya  hai
//  const http = require('http');
//  http.createServer().listen(3000 );


const http = require('http');
http.createServer((req, res) => {
    res.write("<h1>Hello World!</h1>");
    res.end("Welcome to Node.js server.");
}).listen(3000 )



// const server = require('server');

// console.log(server.red("hy kya hai"));
// console.log(server.green("hy kya hai"));
// console.log(server.blue("hy kya hai"));