const fs = require('node:fs')

console.log('reading first file')
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  console.log(data)
})


console.log('Doing other things in between...')

console.log("reading second file");
fs.readFile("./file2.txt", "utf-8", (err, data)=>{
  console.log(data)
});
