const fs = require("node:fs/promises");


//here we can pass an argument when calling this function, if the argument dosnt exists as directory it uses the default "."
const folder = process.argv[2] ?? "."

fs.readdir(folder)
  .then(files => {
    files.forEach(file => {
    console.log(file)
  })
  })
  .catch(err => {
    if (err) {
      console.error('Error when loading the directory', error)
      return
  }
})