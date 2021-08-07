//this is possible when we use var to define a variable 
var a =12;
var a =13;

console.log(a)

//but when we use let it is not possible 
//it gives error

// let a = 1;
// let a = 2;

// console.log(a)


//let is a scope variable meaning if it is defined in funtion it cannot be accessed outside the funti

function fname()
{   
    let a=1;
    console.log(a);
}   

console.log(a) //here it will print 13 not 1 

//const variable cannot be changed once defined



const b=12;

//b++; //will give an error

console.log(b)

//here is an object 

const an= 
{
    name:"shrijit",
    age:"19",
    city:"Ghaziabad"
}

// to add another variable to a

an.email="shrijitsrivastav@gmail.com";

console.log(an)

//here %s will replace the variable given after words 

console.log("hello %s this is your age : %s and this is where you live : %s",an.name,an.age,an.city)

//or you can directly replace %s with ${var_name} and use tilde sign instead of " "

console.log(`hello ${an.name} this is your age : ${an.age} and this is where you live : ${an.city}`)

//classes 


class cars
{
    constructor()           //to make construtor
    {
        this.car_number="UP14AU6002";
        this.car_model="A6";
        this.car_brand="Audi";
    }

    getmodel()              //funtion inside class are known as methods 
    //to declare a method 
    { 
        return this.car_model;
    }


}

var obj = new cars();         //to make object of class

console.log(obj.getmodel());


