const express = require('express')
const app = express()
const routeUrls = require('./api/routes')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log('database connected'))

app.use(express.json())
app.use('/api/routes/',routeUrls)

app.listen(3000,()=>{
    console.log('server is up and running')
})