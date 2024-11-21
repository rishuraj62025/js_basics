// execution context ka mtlb ye hai ki jo bhi file hm banaye hain usko js kaise execute kregi
// js program ko 2 phase mein run krta hai

// {} -> Global Execution Context   , jb bhi program execute hona shuru hoga ,ek Global Execution Context banega aur wo this variable mein store hoga
// Global Execution Context ko ek "this" variable mein refer kr diya jata hai

// ab browswer ka Global Execution Context alag hota hai aur node js ka Global Execution Context alag hota hai
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
// Ab jitni baar function execute hoga utni baar, memory phase and execution phase chalega