const fs = require("node:fs/promises");
const path = require("node:path")

//here we can pass an argument when calling this function, if the argument dosnt exists as directory it uses the default "."
const folder = process.argv[2] ?? "."

//using the folder we create the ls
async function ls(folder) {
  let files
  try {
    //we read the files
    files = await fs.readdir(folder)
  }
  catch {
    //catch the error and exit. important!
    console.error(`Error when loading the directory ${folder}`)
    process.exit(1)
  }


  const filePromises = files.map(async file => {
    //for each fole we get the path
    const filePath = path.join(folder, file)
    let fileStats
    //we get the filepath from the stat
    try {
       fileStats = await fs.stat(filePath)
    }
    //catch error and exit, important!
    catch {
      console.error("Cannot read files")
      process.exit(1)
    }

    //true or false
    const isDirectory = fileStats.isDirectory();
    //one symbol or another
    const fileType = isDirectory ? "d" : "f"
    //the file size
    const fileSize = fileStats.size;
    //last time modified
    const fileModified = fileStats.mtime.toLocaleString();

    //we return a template string with all the information
    return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
  })
  //when we have the files we console log them all
  const filesInfo = await Promise.all(filePromises)
  filesInfo.forEach(file => {
    console.log(file)
  })
}

ls(folder)

