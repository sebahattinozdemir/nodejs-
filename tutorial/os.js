const ourOs = require('os')

const totalMem = ourOs.totalmem()
console.log(totalMem)

const architecture = ourOs.arch()
console.log(architecture)

const  sysInfo= ourOs.cpus()
console.log(sysInfo)

const myPlatform = ourOs.platform()
console.log(myPlatform)