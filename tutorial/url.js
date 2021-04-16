const url = require('url')


const myUrl = new URL('http://www.turkpages.com:3000/index.html?id=100&status=active')

const pathName = myUrl.pathname
console.log(pathName)

const host = myUrl.host
console.log(host)

const hostName = myUrl.hostname
console.log(hostName)

const  port= myUrl.port
console.log(port)

const params = myUrl.searchParams
console.log(params)