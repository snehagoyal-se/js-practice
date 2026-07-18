//Primitive datatypes
/*(Yeh call by value hote h matlab jbhi bhi aap inko khi se khi copy
krte h toh inka jo rogonal data hai woh reference apka memory ka nhi dia 
jata inko copy krkr hota hai inke jo bhi changes hte h woh copy mein 
changes hote h)*/

//(Kisi value ko unique banane ke liye symbol use hota h)
//7 types : String, Number, Boolean, null, undefined, Symbol, BingInt

const score = 100
const isLoggedIn = false
//(Here we do need to pre define the type of datatype of the variable)
/* Javascript is a dynamicallly typed language. 
Here the variable types are not explicitly decalred by the developer;
instead, the JavaScript engine determines the type at runtime based on the value assigned to the  variable.*/

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId)
//Here Output is False althpugh the string is exactly same bacause Symbol unique hota hai

const bigNumber=535785513248434n
console.log(typeof bigNumber) //bigint

//Refernece types (Non-Primitive)

//Arrays, Ojects, Functions

//Arrays:
const heroes = ["shaktiman", "naagraj", "doga"]

//Objects:(Objects are in curly braces)

let myObj={
    name : "Sneha",
    age : 20,
}

//Functions
const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof myObj) //Object
console.log(typeof myfunction) //Function
console.log(typeof id) //symbol
//Type of null is object
