import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os' // node 16+

console.log('Info del sistema operativo:')
console.log('--------------------------')

console.log('Nombre del sistema operativo:', platform())
console.log('Versión del sistema operativo:', release())
console.log('Arquitectura:', arch())
console.log('CPUs: ', cpus())
console.log('Memoria libre:', freemem())
console.log('Memoria totoal:', totalmem())
console.log('uptime:', uptime() / 60 / 60)
