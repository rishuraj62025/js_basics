const Male = ["Rishu", "Mohit", "Prayas"]
const Female = ["Moni", "Shreya", "Neha"]

// Male.push(Female)
// console.log(Male)   // [ 'Rishu', 'Mohit', 'Prayas', [ 'Moni', 'Shreya', 'Neha' ] ]
// console.log(Male[3][1])  // shreya

// concat
// const people = Male.concat(Female)   // concat returns a new array by combining both arrays
// console.log(people)   // [ 'Rishu', 'Mohit', 'Prayas', 'Moni', 'Shreya', 'Neha' ]

// spread operator
const people =[...Male, ...Female]
console.log(people);  // [ 'Rishu', 'Mohit', 'Prayas', 'Moni', 'Shreya', 'Neha' ]

/// FLAT METHOD
const arr1 = [1,2,3,[4,5],6,7,[8,[9,10,[11,12,13]]]];
const arr2 = arr1.flat(Infinity);
console.log(arr2)   // [ 1, 2, 3,  4,  5,  6, 7, 8, 9, 10, 11, 12, 13 ]


console.log(Array.isArray("Rishuraj"))  //false  , it checks the given value is array or not
console.log(Array.from("Rishuraj"));  // ['R', 'i', 's',  'h', 'u', 'r', 'a', 'j']  , convert to array
console.log(Array.from({name:"rishu"}))  // []  ,return empty string bcoz it doesn't convert into array



const marks1 = 76
const marks2 = 87
const marks3 = 80

console.log(Array.of(marks1,marks2,marks3))  // [ 76, 87, 80 ]