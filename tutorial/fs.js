const fs = require('fs')
const path = require('path')


const createFolder = fs.mkdir(path.join(__dirname,'/html'),{},(err)=>{
   if(err){
        console.log('error while creating folder')
   }else{
        console.log('folder succesfully created')
   }
})

console.log(createFolder)

const createFile = fs.writeFile(path.join(__dirname,'/html','index.html'),'<h1>Heading H1</h1>',(err)=>{
    if(err){
        console.log('error occured')
    } else{
        console.log('file succesfully created')
    }
})

console.log(createFile)