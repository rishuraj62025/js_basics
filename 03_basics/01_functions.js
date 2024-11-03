function saymyname(){
    console.log("Rishu")
    console.log("Raj")
}

saymyname()     // o/p: Rishu
                //      Raj

function addtwoNumber(number1, number2){  // number1 & number2 are parameters
    console.log(number1 + number2)
}   

// addtwoNumber(3,5)  // 8
// addtwoNumber(3,"a")// 3a
// addtwoNumber(3,"5")// 35
// addtwoNumber(3,null)// 3

function addtwoNumber(number1, number2){  // number1 & number2 are parameters
    let result = number1 + number2
    return result
    // or
    //  return number1 + number2
} 

const result = addtwoNumber(3,5)
console.log("Result: ",result)   // Result:  8



function justloggedIn(username)     // function justloggedIn(username = "rishu")  ,or we can do this to avoid undefined situation
{
    if(username === undefined)   // if(!username)   ,both condition are same
    {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in `
}

console.log(justloggedIn("Rishu Raj"))   // Rishu Raj just logged in
//console.log(justloggedIn())   // undefined just logged in  ,when if condition is not there
console.log(justloggedIn())  // Please enter a username  , when if condition is present



function calculatecartprice(...num1)
{
    return num1
}
 // ... rest operator ,it converts all arguments into arrays
console.log(calculatecartprice(100,200,300,500,1000))      // [ 100, 200, 300, 500, 1000 ]


function totalmarks(marks1,marks2,...marks3)  // 45 goes to marks1, 65 goes to marks2 ,rest all arguments goes to marks3 and form array
{
    return marks3
}

console.log(totalmarks(45,65,75,85,96))   // [ 75, 85, 96 ]

//----------------------------------------------------------------------
//pass object through function
const user={
    username: "Rishu Raj",
    age : 22
}
//function
function handleobject(anyobject)
{
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`)
}
//call the function
handleobject(user)    // username is Rishu Raj and age is 22

// we can directly pass object also to function
 handleobject({                             // o/p: username is Rishu and age is 22
    username:"Rishu",
    age: 22
})


// pass array through function
const mynewArray = [100,200,300,400]

function returnsecondvalue(anyarray)
{
    console.log(anyarray[1])
}

returnsecondvalue(mynewArray)  // 200
// or we can direcly pass array to function
returnsecondvalue([500,1000,2000])  // 1000