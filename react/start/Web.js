const http = require('http');
const fs = require('fs');
http.createServer((req, resp) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            resp.writeHead(404, { 'Content-Type': 'text/plain' }); 
            resp.write('Internal Server Error');
            resp.end();
        } else {
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write(data);
            resp.end();
        }
    });
}).listen(3000);