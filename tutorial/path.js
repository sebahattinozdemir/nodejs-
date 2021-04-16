const path = require('path')

// two very useful variables in path module

__dirname
__filename

console.log(__filename)
console.log(__dirname)

const ourNewPath = path.join(__dirname,'css','app.css')
console.log(ourNewPath)