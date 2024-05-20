const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hello world')
})
//port 0 (zero) always get the first available port then with server.address we get the number
server.listen(0, () => {
  console.log(`server listening on http://localhost:${server.address().port}`)
})