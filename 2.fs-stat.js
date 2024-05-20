// file system
const fs = require('node:fs') // DONT forget to add the 'node:' before the module

// we read the file.txt
const stats = fs.statSync('./file.txt')

console.log(
  stats.isFile(), // if its a file
  stats.isDirectory(), // if its a directoy
  stats.isSymbolicLink(), // if its a symbolic link
  stats.size // the size
)
