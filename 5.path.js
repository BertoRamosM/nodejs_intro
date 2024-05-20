const path = require('node:path')

// unix the slash its /
// windows the slash its \

// this will tell us the slash of our OS
console.log(path.sep)

// thats why we have to put together routes with path.join() and not manually
const filePath = path.join('content', 'subfolder', 'file.txt')
console.log(filePath)

// with "base" we can get the file name from a full path
const base = path.basename('/tmp/albert-secret-files/password.txt')
console.log(base)

// we can also get only the file name without his extension (.txt)
const fileName = path.basename('/tmp/albert-secret-files/password.txt', '.txt')
console.log(fileName)

// we can also get only the extension
const extension = path.extname('image.jpg')
console.log(extension)
