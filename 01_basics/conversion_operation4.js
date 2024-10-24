let score0 = 54
let score = "65"


console.log(typeof score0) // o/p:number
console.log(typeof(score0))  // o/p:number
console.log(typeof score)   // o/p:string
console.log(typeof score)    // o/p:string

let valueInNumber = Number(score)
console.log(typeof valueInNumber)   // o/p:number
console.log(valueInNumber)  // o/p: 65

let score1="75ab"
let valueInNumber2 = Number(score1)
console.log(typeof valueInNumber2)  // o/p: number
console.log(valueInNumber2)    // o/p: NaN


// conversion to Number
// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0
// null => 0
// undefined => NaN
// "rishu" => NaN(Not a Number)


// conversion to boolean
let someNumber = 1
let booleanNumber = Boolean(someNumber)
console.log(booleanNumber)   // o/p: true
console.log(typeof booleanNumber)   // o/p: Boolean

// 1 => true
// 0 => false
// "" => false
// "Rishu" => true



// conversion to string
let SomeNumber = 55
let convertString =String(SomeNumber)
console.log(convertString);  // o/p: 55 
console.log(typeof convertString);  // o/p: string



//------************************************************* OPERATIONS ***************************************************88---------------

let value = 2;
let Negvalue = -value;
console.log(Negvalue)

console.log(2+2)  // addition
console.log(2-2)  // subtraction
console.log(2*2)  // multiplication
console.log(2/2)  // division
console.log(2**3) // power of  // o/p:8
console.log(2%2)  // remainder



let str1="Rishu"
let str2=" Raj"
let str3=" Sharma"
let str=str1 +str2 +str3
console.log(str)

//-------------------------------------------------------------

console.log(1 + "2")  // o/p:12
console.log("1" + 2)  // o/p:12
console.log("1" + "2")  // o/p:12
console.log("1" + 2 + 2 )  // o/p:122
console.log(1 + 2 + "2" )   // o/p:32
console.log("1" + "2" + 2 )  // o/p:122
console.log("1" + 2 + "2" )   // o/p:122
console.log(1 + "2" + "2" )   // o/p:122


console.log(true)  // o/p:true
console.log("")    // o/p:""
console.log(+true)  // o/p:1 
console.log(+"")    // o/p:0

let alpha=100;
console.log(alpha++)   // o/p: 100
console.log(alpha)      // o/p: 101