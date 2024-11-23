// execution context ka mtlb ye hai ki jo bhi file hm banaye hain usko js kaise execute kregi
// js program ko 2 phase mein run krta hai

// {} -> Global Execution Context   , jb bhi program execute hona shuru hoga ,ek Global Execution Context banega aur wo this variable mein store hoga
// Global Execution Context ko ek "this" variable mein refer kr diya jata hai

// ab browser ka Global Execution Context alag hota hai aur node js ka Global Execution Context alag hota hai
// to browser ke andar this ki value window object aata hai
// javascript single threaded hai

// hmare pass 3 execution context hai
// 1.  Global Execution Context
// 2.  Function Execution Context
// 3.  Eval Execution Context  (not so important)

// In two phases , js code execute
// 1. Memory creation phase  , In this phase, only memory is allocated to variable, function etc.
// koi bhi variable ko memory allocate hota hai to usme initially undefined store hota hai
// aur koi function hota hai to usme uska definition store hota hai
// 2. Execution phase  , isme memory mein value fill hota hai
// During execution phase, agar koi bhi function hota hai to uska ek alag execution context bnta hai
// jisme ek new variable environment bnta hai aur ek execution thread bnta hai
// jitna baar function execute hota hai utna baar uske liye new executional context bnta hai
// Ab jitni baar function execute hoga, utni baar memory phase and execution phase chalega



// ex:
// let val1 = 5
// let val2 = 8
// function addNum(num1, num2)
// {
//     let total = num1 + num2
//     return total
// }

// let result1 = addNum(val1, val2)
// let result2 = addNum(10, 2)


// step 1 : global execution context 
// step 2 : memory creation phase 
// val1 <- undefined
// val2 <- undefined
// addNum <- definition
// result 1 <- undefined
// result 2 <- undefined
// step 3 : execution phase
// val1 <- 5
// val2 <- 8
// addNum -> new variable environment  +  execution thread 

// ab jitni baar function call hoga utni baar execution context bnega
// ab yahan pe addNum function hai to iska execution context bnega
// jisme phir se memory phase and execution context bnega

// ab memory phase
// val1 <- undefined
// val2 <- undefined
// total <- undefined

// execution context
// num1 <- 5
// num2 <- 8
// total = 8 + 5 = 13
// result1 = 13

// ab iss execution context ka work finish ho gya to ab ye delete bhi ho jaega

// ab addNum function phir se call hua hai to ab phir se execution context create hoga
// isme bhi same step hoga memory phase , execution context

// call stack : jitne bhi functions hain code mein wo sb execute hote hain lifo manner mein

