const fs = require('node:fs/promises')

// Solo en los modulos nativo que no tienen promesas nativas
/* const { promisify } = require('node:util')
const readFile = promisify(fs.readFile) */

console.log('Leyendo el primer archivo ...')
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log('primer texto:', text)
    })

console.log('Hacer cosas mientras lee el primer archivo ...')

console.log('Leyendo el segundo archivo ...')
fs.readFile('./archivo2.txt', 'utf-8') 
    .then(text => {
        console.log('segundo texto:', text)
    })
