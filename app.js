const http = require('http');
const port = 8000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello from my HW6 Jenkins Node app!</h1>');
});

server.listen(port, function () {
  console.log('App is running on port ' + port);
});
