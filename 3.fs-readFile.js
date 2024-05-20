
//with 'promisify' we can create promises when the native module that its not a callback but we need a promise
//const {promisify} = require('node:util')
//const readFilePromise = promisify(fs.readFile)

const fs = require("node:fs");
console.log('reading first file')
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  console.log(data)
})


console.log('Doing other things in between...')

console.log("reading second file");
fs.readFile("./file2.txt", "utf-8", (err, data)=>{
  console.log(data)
});
