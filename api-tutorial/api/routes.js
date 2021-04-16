const { response } = require('express')
const express = require('express')
const app = express()
const router = express.Router()
const signUpTemplate = require('../models/RoutesModel')


router.post('/signup',(request,response)=>{
    const createdUser = new signUpTemplate({
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    createdUser.save().then(data=>{
        response.json(data)
    }).catch(err=>{
        response.json(err)
    })
})

module.exports = router