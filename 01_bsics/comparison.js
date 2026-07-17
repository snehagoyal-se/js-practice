//Comparison of datatypes

console.log(2>1) //Boolean expression
console.log(2>=1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)

console.log("2">1)//True 
console.log("Sneha">1)//False

//Still typescript doesn't allow you to compare two different datatypes

console.log(null>0)
 console.log(null==0)
 console.log(null>=0)

 //Similarly undefined se compare krenge toh false he ayega

 //===(strict check)=> Not only check the value but also strictly check the dataypes 

 console.log("2"===2) //False (Because datatype is not same)
