const fs = require('node:fs') // a partir de Node 16, se recomienda utilizar node:

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size,
)
