const http = require('http');
http.createServer((req,res)=> {
    response.writeHead (200)
response.end ('hello world')
}).listen (8081);

console.log ('server running at 3000')