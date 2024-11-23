// Any string is taken as truthy value and empty string is taken as falsy value

const str = "isloggedIn"
if(str)  // here str is truthy because string is truthy value
{
    console.log("yes, logged In"); // => o/p
}
else
{
    console.log("logged out");
    
}
//o/p: yes, logged In

// some falsy values 

// 0, -0, false, "", BigInt 0n, null, undefined, NaN

// some truthy values

// "0", 'false', " ", [], {}, function(){}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0)
{
    console.log("yes, Object is empty");    // yes, Object is empty
}


// true == 1  =>true
// false == 0  => true
// false == "" => true
// 0 == "" => true


// Nullish Coalescing Operator (??) : null, undefined
let val1,val2,val3,val4;
val1 = 5 ?? 10
val2 = null ?? 20
val3 = undefined ?? 30
val4 = null ?? 10 ?? 20
console.log(val1)   // 5
console.log(val2);  // 20
console.log(val3);  // 30
console.log(val4);  // 10


// Ternary Operator 

// condition ? true : false
// ex:
const iceTeaPrice = 100
iceTeaPrice < 90 ? console.log("Less Price") : console.log("More Price")
 // o/p: More Price

