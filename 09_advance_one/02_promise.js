// The promise object represents the eventual completion (or failure) of
// an asynchronous operation and its resulting value.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed. 

// jyadatar promises hm consume hi krte hain ,
// create bhi krte hain pr consume jyada krte hain

// creation of Promise  -----------------------
const promiseOne = new Promise(function(resolve,reject){
   // Do an async task
   // DB calls, cryptography, network

   setTimeout(() => {
    console.log("Async task 1 is completed")
    resolve();
   }, 1000);
});

// consumption of promise
// here resolve is connected with then
promiseOne.then(function(){
    console.log('promise consumed 1')
})

//----------------------------------------------
// above steps can also be done as:

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 completed")
        resolve();
    },1000)
    
}).then(function(){
    console.log("response resolved 2");
})

//------------------------------------------------------

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name:"Rishu", email:"rishu@gmail.com"})
    },1000)
})

PromiseThree.then(function(user){
   console.log(user);
})

//-------------------------------------------

const PromiseFour = new Promise(function(resolve,reject){
   setTimeout(function(){
    let error = false;
    if(!error)
    {
        resolve({firstName:"Rishu", lastName:"Raj" })
    }else {
        reject("Error: something went wrong")
    }
   },1000)
})

//PromiseFour.then().catch();
// then detect resolve, catch detect error

PromiseFour.then((user)=>{
   console.log(user)
   return user.firstName;
}).then(function(username){
    console.log(username)   // Rishu  
}).catch(function(error){
   console.log(error);
}).finally(()=>{
    console.log("Promise is either resolved or rejected")
})

// (finally) must run, can be treated as default


//--------------------------------------------------------------

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error)
        {
            resolve({username : "javascript" , password : "123"})
        }else{   
            reject("Error : JS went wrong")
        }
    },1000)
})

// async await - ye bhi (then  , catch) jaisa hi hai thore der wait krta hai operation finish hone ka ,
// tbhi aage badhta hai nhi to wahin pe error de deta hai
// iska ek example ho skta hai, jb hmko database se connection krna hai 
// pr connection ho nhi paa rha , to async wait krega, phir bhi nhi ho rha to  error show kr dega

async function consumepromiseFive(){
    try{
        const response = await promiseFive   // yahan pe await response ka wait kr rha promiseFive se
        console.log(response)
    }catch(error){
     console.log(error)
    }
    
}

consumepromiseFive()

//--------------------------------------------------------

// fetch(URL) fetch takes url as input, it is also like a object
// it return resolve promises

async function getAllUseres(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()  // it converts  string to object, then we extract data
        // typeof response is string 
        console.log(data)
    } catch(error)
    {
        console.log("E: ", error);
    }   
}   

getAllUseres()

//----------------------------------------------------

// just above code of fetch can be written in then,catch also

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return  response.json()
}).then((data)=>{
    console.log(data)
 }).catch((error)=> console.log(error))