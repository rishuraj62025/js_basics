// Object literal

const user ={
    username:"Rishu Raj",
    loginId : 123,
    signedIn: true,

    getUserDetails : function(){
        //console.log("Got user details from database");
        console.log(`Username : ${this.username}`);
        // this is used for current context
    }
}

console.log(user.username);
console.log(user.getUserDetails())


// browser ke andar this ka value window object aata hai jo global object hai
// node environment ke andar , this ka value {} empty parenthesis aata hai


function User(username, loginCount, isLoggedIn)
{
    this.username = username;
    this.loginCount = loginCount

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

// const userOne = User("Rishu", 10, true)
// const userTwo = User("Raj", 11, false)
// console.log(userOne)

// yahan pe userTwo print nhi kra rhe phir bhi userTwo ka hi data print hoga,
// wo userOne ko override kr dega 

// iss liye hm new keyword ka use krte hai, wo naya instance bana ke deta hai har baar, wo dusre data ko effect nhi krta hai
// jb bhi new keyword ka use krte hain to empty object create hota hai, jisko instance bola jata hai
// 

const userOne =new User("Rishu", 10, true)
const userTwo =new User("Raj", 11, false)
console.log(userOne.constructor)  // ye ek function hai jo khud hi ka reference deta hai
console.log(userOne)
console.log(userTwo)

// new  keyword ke karan constructor function call hota hai,
// ye jo bhi arguments hote hain usko ek jgh pack krta hai, or de deta hai