
const app = another()
const isHuman = true

function checkHuman(){
    if(isHuman){

        console.log("I am Human")
    }else{
        console.log("I m not")
    }
}

console.log(checkHuman())

// ternary version
isHuman ? console.log('I am human') : console.log('I m not human') 


//destructuring
const myObject = {
    name:'Sebahattin',
    location:'Turkey',
    statement:'Stop Gender Violance'
}
console.log(myObject)
const {location,name} = myObject
console.log(location)
console.log(name)


console.log("************************************************")
console.log("************************************************")
console.log("************************************************")

