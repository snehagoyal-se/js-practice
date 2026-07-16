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