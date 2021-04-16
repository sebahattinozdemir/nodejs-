function description(name,location,profession){

    const result = 'my name is ' + name + ' i live in ' + location + ' and my profession ' + profession
    return result
}

console.log(description('sebahattin','adana','developer'))

//arrow function
const desc = (name,location,profession)=>{
    const result = 'my name is ' + name + ' i live in ' + location + ' and my profession ' + profession
    return result
}

console.log(desc('ali','ankara','engineer'))



name = ()=> console.log('sebo')
name()


// difference  between JSON and javascript object

const javascriptObject = {
    name:'sebo',
    location:'turkey'
}


const jsonObject = {
    'name':'sebo',
    'location':'turkey'
}

console.log(javascriptObject)
console.log(jsonObject)

/* 
   HTTP REQUESTS

   GET => GETTING DATA FROM DATABASE
   POST => SAVING DATA TO DATABASE
   PUT => UPDATING DATA TO DATABASE
   DELETE => DELETE DATA FROM DATABASE

*/

/*
   HTTP STATUS CODE
   404=> PAGE NOT FOUND
   400 => BAD REQUEST
   200 => GOOD REQUEST
   401 => ACCESS DENIED
   500=> INTERNAL SERVER ERROR

*/