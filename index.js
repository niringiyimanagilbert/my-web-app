// FILE: my-web-app/index.js
// RW: Aha ni ho ushyira code y'urusobe rwa server

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World! Server iriho. Murakaza neza!'); // mixed EN + RW message
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
