let score="23abc"
//if null rkha toh output zero aaega
//fi undefined rkha toh NaN (not an number)
//on boolean value 2 for true and 0 for false
//And when number is given the output is the actual number 


console.log(typeof score)
console.log(typeof (score))

let valueInNumber  =Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let isLoggedIn="Sneha"

//Now converting to Boolean
//""(empty string then after conversion it is False)
//"Sneha" like this karke kia toh True aajaega output

let BooleanIsLoggedIn=Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn) //Output is True

let someNumber=NaN

//Here whateever number, null, undefined,NaN you give the output will print accordingly but still as a string unless you write some unnecessary just the letters then it will be an error

let conversionString=String(someNumber)
console.log(conversionString)
console.log(typeof conversionString)

////********Operations********////

let value=3
let negValue=-value //-3
console.log(negValue)
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3) //8
console.log(2/2)
console.log(3/2)
console.log(2%3) //remainder

let str1="Hello "
let str2="Sneha"

let str3=str1+str2
console.log(str3)
console.log("1"+2)
console.log(1+"2")
console.log("1"+"2")
console.log("1"+2+2) //122
console.log(1+2+"2") //32

console.log(true) 
//If written +true then output is 1
//If written -true then output is -1
//true+ is error

console.log(+"")

let num1,num2,num3;

num1=num2=num3=2+2

let gameCounter=100
++gameCounter
console.log(gameCounter)

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion