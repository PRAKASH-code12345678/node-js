const http = require('http');
const usersData =[ 
{
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
},
{
    name: "ram",
    age : 20,
    email: "ram@example.com"


}
]
http.createServer((req, resp) => {
    resp.setHeader("Content-Type", 'application/json');
    resp.write(JSON.stringify (usersData));

    resp.end();
}).listen(6100);