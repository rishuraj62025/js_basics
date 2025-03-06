
// function 
//          \
//           \
//            \
//             \
// Array -----> object ----> null  
//            /
//           / 
//          /
//       String 

// js mein hr chiz apne aap mein ek object hai
// aur jo property object ke pass present hai , whi property 
// string and array ke pass bhi hai 

function multiplyby5(num)
{
   return num*5;
}

multiplyby5.power = 2;

console.log(multiplyby5(5));         // o/p:25
console.log(multiplyby5.power);      // o/p:2
console.log(multiplyby5.prototype)   // o/p:{}

// function bhi function ke tarah behave krta hai pr wo bhi reference object ko hi krta hai


function createUser(username, score)
{
   this.username = username   // this means current context
   this.score = score
}

// yahan hm prototype ke help se apna method inject kr rhe function mein
createUser.prototype.increment = function(){
   this.score++;
}

createUser.prototype.printMe = function()
{
   console.log(`score is ${this.score}`);
}

// yahan pe new keyword ka importance isliye hai ki jb hm 
// new method ko inject kiye prototype ke help se function me.
// chai variable mein jb value put kr rhe the bina new keyword ke to
// usko pata nhi hai ki new method inject hua hai
// tb kaise pata chalega ka ki new method injecct hua hai,
// isliye new keyword lgate hain 
const chai =new createUser("chai", 20)
const tea = new createUser("tea", 30)

chai.increment()  // 21
chai.printMe()    // score is 21

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and 
this is bound to the newly created object. If no explicit return value is specified from the constructor, 
JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), 
the newly created object is returned.

*/