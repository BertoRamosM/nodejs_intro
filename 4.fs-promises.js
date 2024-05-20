//to use promises we require this other fs module:
const fs = require("node:fs/promises");

console.log("reading first file");
fs.readFile("./file.txt", "utf-8")
  .then(data => {
  console.log(data)
})
console.log("Doing other things in between...");

console.log("reading second file");
fs.readFile("./file2.txt", "utf-8")
  .then(data => {
  console.log(data)
})

