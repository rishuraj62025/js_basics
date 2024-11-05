let a =300

if(true)
{
    let a = 10;
    const b = 20; 
    console.log("a is :",a)     // a is : 10
}

console.log(a)  // 300

// var is not used generally.

// In for loop , variable i is used as block scope not global scope
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


// hm jo bhi variable global scope mein declare krenge usko block scope mein use kr skte hain,
// pr jo bhi variable ko block scope mein declare krenge usko global scope mein use nhi kr skte hain


// example
function one(){
    let username = "Rishu Raj"

    function two()
    {
        let website = "Youtube"
        console.log(username);  // here username can be accessed becoz username is in global scope for two function
        
    }
    //console.log(website)  // here website is declared in block scope  so, it is not used outside block
    two()  // Rishu Raj
}
one()  

// example
if(true)
{
    const username = "Rishu"
    if(username === "Rishu")
    {
        const website = "Raj"
        console.log(username + website)  // Rishu Raj
    }
    console.log(username) // Rishu
}
//console.log(website)  // this will not run becoz website is declared in block scope 


// other ways to declare function ,sometimes it is called expression

// normal ways
function addone(num)
{
    return num + 1
}
addone(10)

//otherways  
//console.log(addtwo(10))  // this line is not accessible at line 64 becoz , Cannot access 'addtwo' before initialization
const addtwo = function(num)     // expression
{
    return num + 2
}
console.log(addtwo(10))  // 12