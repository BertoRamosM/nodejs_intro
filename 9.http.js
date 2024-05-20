const http = require('node:http')
const { findPort } = require("./10.free-port.js")

const desiredPort = process.env.PORT ?? 3000 

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hello world')
})

findPort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`);
  });
});
//port 0 (zero) always get the first available port then with server.address we get the number


// without the find port function
/* server.listen(0, () => {
  console.log(`server listening on http://localhost:${server.address().port}`)
}) */