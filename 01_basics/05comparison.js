console.log(2 > 1)   // true
console.log(2 >= 1)  // true
console.log(2 < 1)   // false
console.log(2 <= 1)  // false
console.log(2 == 1)  // false
console.log(2 != 1)  // true


console.log("2" > 1)   // true
// "2"  is converted into number 2 then comparison is done with 1
console.log("02" > 1)   // true

//------------------------------------------------------------------------------------------

console.log(null>0)  // false
console.log(null==0) // false
console.log(null>=0) // true
console.log(null<0)  // false
console.log(null<=0) // true

//------------------------------------------------------------------------------------------
// These types of below codes are not good to use

console.log(undefined == 0)  // false
console.log(undefined > 0)   // false
console.log(undefined < 0)   // false
console.log(undefined <= 0)  // false
console.log(undefined >= 0)  // false

//------------------------------------------------------------------------------------------
 
console.log(undefined > null)  // false
console.log(undefined >= null) // false
console.log(undefined < null)  // false
console.log(undefined <= null) // false
console.log(undefined == null) // true
console.log(undefined != null) // false

//-------------------------------------------------------------------------------------------
console.log("2" == 2)  // true ,it only checks value

// strict check  => ===
console.log("2" === 2)  // false
// it not only checks value but also data types.
/// one are string and one are number, so both are different