
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

console.log(multiplyby5(5));         // o/p:5
console.log(multipleby5.power);      // o/p:2
console.log(multiplyby5.prototype)   // o/p:{}

// function bhi function ke tarah behave krta hai pr wo bhi ek object hi hai


function createUser(username, score)
{
   this.username = username
   this.score = score
}

createUser()