// diff methods to declare variable
const score = 500
console.log(score)

const marks = new Number(400)
console.log(marks);

// diff. methods of number
console.log(marks.toString()) // 400
console.log(marks.toString().length) // 3
console.log(marks.toFixed(3)); // 400.000 // to set number of digits after decimal


const otherNumber = 232.789
console.log(otherNumber.toPrecision(3))  // 233
console.log(otherNumber.toPrecision(4))  // 232.8

const hundreds =100000000
console.log(hundreds.toLocaleString());  // 100,000,000  // US -Standards
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,00,000  // Indian Standards



// ----------------------------------------MATHS -------------------------------------------------
console.log(Math);  // Object [Math] {}

console.log(Math.PI)  //3.141592653589793
console.log(Math.abs(-6))   // 6  // abs means absolute,converts negative to positive,not positive to negative
console.log(Math.round(4.87))  // 5
console.log(Math.ceil(3.2));   // 4
console.log(Math.floor(3.9));  // 3

console.log(Math.min(3,2,6,1,9))  // 1 , minm of all these values
console.log(Math.max(47,1,23,345,775));  // 775 , maxm of all these values



// Math.Random()  ,it produces random different values every time between 0 and 1
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor((Math.random()*10)) + 1);


const min = 10;
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)) + min)  // it produces random values between 10 and 20 including 10 and 20

