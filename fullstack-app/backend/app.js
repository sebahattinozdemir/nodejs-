const express = require('express')
const app = express()
const routeUrls = require('./routes/Routes')

const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,()=>{console.log('database connected')})

app.use(express.json())
app.use(cors())
app.use('/api',routeUrls)
app.listen(4000,()=>console.log('server is up and running'))


/* express nodemon dotenv mongoose cors bcrypt*/