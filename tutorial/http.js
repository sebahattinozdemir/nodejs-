const http = require('http')
const path = require('path')
const fs = require('fs')
/*
const server = http.createServer((request,response)=>{
    response.write('Subscribe my Youtube Channel')
    response.end()
})

server.listen(3000,()=>{console.log('server is up and runnung at port 3000')})
*/

const server = http.createServer((request,response)=>{
    if(request.url === '/'){
        fs.readFile(path.join(__dirname,'index.html'),(error,data)=>{
            response.writeHead(200,{'content-type':'text/html'})
            response.write(data)
            response.end()
        })
    } else if(request.url === '/about'){
        fs.readFile(path.join(__dirname,'about.html'),(error,data)=>{
            response.writeHead(200,{'content-type':'text/html'})
            response.write(data)
            response.end()
        })
    }
})

server.listen(3000,()=>{console.log('server is running at port 3000')})