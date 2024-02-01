const os = require('node:os') // node 16+

console.log('Info del sistema operativo:')
console.log('--------------------------')

console.log('Nombre del sistema operativo:', os.platform())
console.log('Versión del sistema operativo:', os.release())
console.log('Arquitectura:', os.arch())
console.log('CPUs: ', os.cpus())
console.log('Memoria libre:', os.freemem())
console.log('Memoria totoal:', os.totalmem())
console.log('uptime:', os.uptime() / 60 / 60)
