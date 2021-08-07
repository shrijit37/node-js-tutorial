var student = function()
{
    this.name="Shrijit Srivastav";
    this.rollno="12";
    this.age="19"
    this.email="shrijitsrivastav@gmail.com"
}
//prototype help us to add new funtion to already existing funtion/class


student.prototype=
{
    address:"Ghaziabad",              //adding new property remember comma

    getName:function()                  //adding new funtion       
    {
        return this.name;
    }
}

var stud = new student();           //making object of the funtion

console.log(stud);
console.log(stud.getName());