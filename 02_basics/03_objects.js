// There are two ways to declare objects, first is literals , second is constructor
// jb bhi hm constructor se koi bhi object banate hain to singleton ek object banta hai
// literals se singleton object nhi bnta hai usme multiple instances bn jate hain
// singleton
// Object.create

// Object literals
const mysym = Symbol("key1")  // declare symbols ,key = "key1"

const newuser ={
    name:"Rishu",
    "full name":"rishu raj sharma",
    [mysym]: "mykey1",   // value ="mykey1" 
    roll_no: 103,
    branch: "CSE",
    email: "rishu@gmail.com",
    collegedays: ["monday", "tuesday", "wednesday"]
}

console.log(newuser.roll_no);   // 103
console.log(newuser.collegedays);  // [ 'monday', 'tuesday', 'wednesday' ]
// another method to print
console.log(newuser["email"])  // rishu@gmail.com
console.log(newuser["roll_no"])   // 103
console.log(newuser["full name"])  // rishu raj sharma
console.log(newuser[mysym])  // mykey1
console.log(typeof newuser[mysym])   // string

// change the value
newuser["email"] = "rishu@microsoft.com"
newuser.roll_no = 110
console.log(newuser.email)   // rishu@microsoft.com
console.log(newuser.roll_no) // 110

// freeze , after freezing values of objects can't be changed
// Object.freeze(newuser)
newuser.email = "rishu@google.com";
console.log(newuser)  // "rishu@microsoft.com" email doesn't  change due to object freeze

// function in objects
newuser.greeting = function(){
    console.log("Hello user");  
}
console.log(newuser.greeting())   // Hello user

// using of string interpolation
newuser.greetingtwo = function(){
    console.log(`Hello user, ${this["full name"]}`)  
}
console.log(newuser.greetingtwo())  // // Hello user, rishu raj sharma