const http = require('http');

const server = http.createServer((req,res) => {res.end('Hello world!\n');});

server.listen(5000, () => {console.log('Server listening on port 5000...');});