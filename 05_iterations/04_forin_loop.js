// for in loop

const myObject = {
    js : "javascript",
    rb : "Ruby",
    cpp : "c++",
    py : "python"
}

for (const key in myObject) {
   // console.log(key);
}
//o/p:
// js
// rb
// cpp
// py

for (const key in myObject) {
     console.log(myObject[key]);
 }
 // o/p:
//  javascript
// Ruby
// c++
// python



for (const val in myObject) {
    console.log(`${val} is shortcut for ${myObject[val]}`);
}
// o/p:
//js is shortcut for javascript
// rb is shortcut for Ruby
// cpp is shortcut for c++
// py is shortcut for python


const programming = ["cpp", "ruby", "java", "python"]

for (const key in programming) {
   console.log(key)
}
// o/p:
// 0
// 1
// 2
// 3

for (const key in programming) {
    console.log(programming[key])
 }
 //o/p:
// cpp
// ruby
// java
// python