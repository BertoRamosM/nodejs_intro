const fs = require('node:fs')

//we can read the directories
fs.readdir(".", (error, data) => {
  if (error) {
    console.error('Error on reading the directory', error)
    return
  }
  data.forEach(file => {
    console.log(file)
  })
})