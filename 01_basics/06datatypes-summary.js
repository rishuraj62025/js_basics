// Primitive
// mainly 7 data types:
// string, Number, Boolean, null, undefined, symbol, BigInt
// In primitive, value is passes as pass by value



// Javascript has dynamically typed language and from one point of view,
//  it is good because it’s pretty simple to assign values to the variables.
//  You don’t need to care about the type of the variable because the type for 
//  each variable will be set dynamically during code execution.


const score = 5
const value =5.67
const outsidetemp = null
let isloggedIn = false
let alpha;

const id = Symbol("2345")
const anotherid = Symbol("2345")
console.log(id === anotherid)   // o/p: false

const bigNumber = 8357230932689234n  // n represent declare as bigInt
console.log(bigNumber)


//Reference(Non Primitive)
// Array, Objects, Functions
// In reference , addresses are passed

// array
const heros =["shaktiman", "Dara", "Naagraj"]
console.log(heros)  // o/p: ["shaktiman", "Dara", "Naagraj"]
console.log(typeof heros)  //o/p: object
// jitne bhi non primitive type hain sbka typeof object hi aata hai


// object =>In key value pair
let myobj = {
    Name : "Rishu",
    age : 22,
    section : 'B',
}

// function
const myfunction = function(){
    console.log("Hello World!")
}
console.log(typeof myfunction)  // o/p: function  , function ke return type ko object-function bola jata hai
// jitne bhi non primitive type hain sbka typeof object hi aata hai

console.log(id)   // o/p:symbol(2345)
console.log(anotherid)  // o/p:symbol(2345)
console.log(outsidetemp)  // o/p: null
console.log(alpha)    // undefined

// imp****
console.log(typeof outsidetemp)  // o/p: object


typeof result
undefined = undefined
null = object
boolean = boolean
number =number
string = string
function = function
    symbol = symbol
