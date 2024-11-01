// primitive data types store in stack memory
// Non- primitive data types store in heap memory

//primitive
// In primitive, pass by value is done, a copy of variable is form, if any changes is done in another variable it will not reflect on original value
let name = "Rishu Raj"
let anothername=name
anothername="Rishu Raj Sharma"

console.log(name)   // o/p: Rishu Raj
console.log(anothername)   // o/p: Rishu Raj Sharma


// Non primitive
// In Non primitive, pass by reference method is used ,if any changes is done ,will reflect on original value
let objone = {
    name : "Rishu Raj",
    email : "rishu@gmail.com",
    age: 22 
}
let objtwo=objone
objtwo.age = 25
console.log(objone.age)  // o/p: 25
console.log(objtwo.age)  // o/p: 25

