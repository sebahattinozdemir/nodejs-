const { response } = require('express')
const express = require('express')
const app = express()

app.get('/',(request,response)=>{
    response.send('<h1>THIS IS HOME PAGE</h1>')
})

app.get('/about',(request,response)=>{
    response.send('about page')
})

app.listen(3000,()=>console.log('server is up and running'))