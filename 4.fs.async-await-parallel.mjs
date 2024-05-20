import { readFile } from 'node:fs/promises'

//  this is in parallel so much faster as we read two files at the same time, and keeps running the script once both files have been readed

Promise.all([
  readFile('./file.txt', 'utf-8'),
  readFile('./file2.txt', 'utf-8')
]).then(([text, secondText]) => {
  console.log('first text', text)
  console.log('second text', secondText)
})
