// javascript mein variable (string, array, object, function) sbko hold kr skta hai

const user = {
    username : "Rishu Raj",
    price : 999,

    welcomeMessage : function()
    { // this ka use current context mein krte hain, object ke andar this ka use ho jata hai
        console.log(`${this.username} , welcome to website`);
        console.log(this);   //  o/p:  {
                             //    username: 'Rishu Raj',
                             //    price: 999,
                             //    welcomeMessage: [Function: welcomeMessage]
                             //        }
    }
}

user.welcomeMessage()     // Rishu Raj , welcome to website
console.log(user.price)   // 999
user.username = "Rishu Raj Sharma"    // Rishu Raj Sharma , welcome to website
user.welcomeMessage()     // {
                          //  username: 'Rishu Raj Sharma',
                          // price: 999,
                         //  welcomeMessage: [Function: welcomeMessage]
                         //     }
// global space mein jb this print hota hai to empty object aata hai
console.log(this);  // {}


// js file pehle browser ke saath js engine mein run hota tha ,engine mein global object jo hai wo window object hai


function chai()
{
    let username = "chai aur code"
    console.log(username)  // chai aur code
    console.log(this.username)   // undefined  , this ka use function ke andar nhi kr skte 
}
chai()  


const chai1 = function()
{
    let username = "javascript"
    console.log(this.username)
}
chai1()    //  undefined


// ARROW FUNCTION   ,
// () => {}
const world = () => {
    username = "Hello World"
    console.log(username)       // Hello World
    console.log(this)           // {}
}
world()

//----------------------------------------------------------
const addtwo = (num1, num2) =>
{
return num1 + num2
}
console.log(addtwo(3, 5))    // 8  

// implicit return  , isme return lagana nhi prta 
//const addthree = (num1, num2, num3) => num1 + num2 + num3
const addthree = (num1, num2, num3) => (num1 + num2 + num3)    // line 67 & 68 both are same
console.log(addthree( 3,4,3))   // 10

// agar curli braces use kiye hain to return likhna prega , pr jb parenthesis use krenge to return nhi likhna hai
// explicit return mein return lagana prta hai

// agar object ko return krna hai implicit mein to
const myname = () => ({username : "Rishu Raj"})
console.log(myname());   // { username: 'Rishu Raj' }



const myarray = [3,5,7,9]
// myarray.forEach(function () {})
// myarray.forEach(() => {})
// myarray.forEach(() => ())
/// above 3 synatax work 