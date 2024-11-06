// Immediately Invoked Function Expressions (IIFE)

// application start hone ke saath database ko immediately connect krna prta hai bahut baar isliye bhi IIFE ka use krte hain
// IIFE ka use isliye krte hain kyonki bahut baar global scope ka variable, function ke andar pollution krta hai,
// jisse result pe affect prta hai. uska liye immediate invoked function ka use krte hain

// ()()
(function myworld() {   // named IIFE
    console.log("Hello myworld")
})();  // js ko pata nhi hai ki invoked function mein rokna  kahan hai , iss special case mein semicolon lagana prta hai
// o/p : Hello myworld 


(() => {  // unnamed IIFE
    console.log("Rishu Raj")    // Rishu Raj
})();


// when we have to pass variable
((name) => {
console.log(`My Name is ${name}`)
})("Rishu Raj Sharma")          // My name is Rishu Raj Sharma