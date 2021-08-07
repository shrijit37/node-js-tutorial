//how to make objects 

var users={name:"Shrijit",age:"19",city:"Ghaziabad"}
console.log(users)

//to only print name : users.name 
console.log(users.name)
//same for age,city or whatever

//anonymous funtion is funtion with no name and it can be defined within a variable 

var person=function(a,b)
{

    console.log("anonymous funtion "+(a+b))
}

person(12,12);           //calling anonymous funtion 


// arrow funtion = just to shorten the anonymous funtion

var person=(a,b)=> console.log("anonymous funtion "+(a+b))

person(23,12)

// or we can write 


var person=(a,b)=> 
{
    console.log("anonymous funtion "+(a+b))
}

person(21,12)

//Global object and their usage:
    //__dirname: to check in which directory the file is 
    //__filename: to check the files in the directory
    //require= to share funtions b/w two files in same directory
    //console
    //buffer: to story value in temporary memory
    //module
    //exports = to share the value of variable to file with require(syntax: module.exports.<variable name to be exported with>= variable name in the current file 
    
console.log(__dirname)
console.log(__filename)
var main = require("./check")           //making object of the other file with require
console.log(main.name2)


