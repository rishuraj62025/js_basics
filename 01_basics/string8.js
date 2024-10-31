const name ="Rishu"
const repocount = 50

console.log(`My name is ${name} and my repo count is ${repocount}`);  //o/p:My name is Rishu and my repo count is 50
// isko string interpolation bola jata hai
console.log("rishu123")


// 2nd method to declare string
const newName = new String('RishuRaj');
// iss method mein hm javascript ke objects ko use kr rhe hain

// different methods of objects (strings)
console.log(newName[0]);  // R
console.log(newName.charAt(2));  // s
console.log(newName.indexOf('t'));  // -1
console.log(newName.indexOf('s'));  // 2
console.log(newName.__proto__) // {}
console.log(newName.toUpperCase())  // RISHURAJ
console.log(newName.length);  // 8


console.log(newName.toLowerCase());   // rishuraj

console.log(newName.substring(0,5));  // Rishu   => last index excluded
console.log(newName.slice(-7,6));    // ishuR    => last index excluded


const newStr = "    Panchayat   Series   ";
console.log(newStr);
console.log(newStr.trim());  // Removes extra spaces from start
console.log(newStr.trimStart());  // Removes extra spaces from start
console.log(newStr.trimEnd())     // trim spaces from end


// "replace" method replaces some string with new string
const url = "https://rishu%20sharma.com";
console.log(url.replace('%20' , '-'))    // o/p: https://rishu-sharma.com



// includes method checks whether present or not
console.log(url.includes('sharma'));  // true
console.log(url.includes('Raj'));     // false


// split 
const str1 = "shah-rukh-khan"
console.log(str1.split('-'))   // o/p: [ 'shah', 'rukh', 'khan' ]