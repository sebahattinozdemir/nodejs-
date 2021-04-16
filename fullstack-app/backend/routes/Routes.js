const { response } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signUpModel')
const bcrypt = require('bcrypt')

router.post('/signup',async (request,response)=>{
    

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password,saltPassword)
    const signedUpUser = new signUpTemplateCopy({
        name:request.body.name,
        surname:request.body.surname,
        email:request.body.email,
        password:securePassword
    })

    signedUpUser.save()
    .then(data=>{
        response.json(data)
    }).catch(err=>{
        response.json(err)
    })
})


module.exports = router