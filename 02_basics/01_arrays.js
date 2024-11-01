const myarr = [0, 1, 2, 3, 4 , 5]
// const myar1 = [1,3,2,4,6,true,"rishu"]   => true
// Javascript arrays are resizable and can contain a mix of different data types.
// Javascript array-copy operations create shallow copies

// shallow copy and deep copy
// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values)
// as those of the source object from which the copy was made.

// deep copy : A deep copy of an object is a copy whose properties do not share the same references(point to the 
// same underlying values) as those of the source object from which the copy was made. 
console.log(myarr)  // to print complete array   ==>  [ 0, 1, 2, 3, 4, 5 ] 
console.log(myarr[0])    // 0

const arr2 = ["rishu", "raj", "sharma"]
console.log(arr2[1])  // raj

const arr3 = new Array(1,3,5,7)
console.log(arr3[2])   // 5

// Methods in array
myarr.push(6)  // push 6 in array
myarr.push(7)
console.log(myarr)   //  [ 0, 1, 2, 3, 4, 5, 6, 7]
myarr.pop()  // pop last element from array
console.log(myarr)   // [ 0, 1, 2, 3, 4, 5, 6]

myarr.unshift(8)  // it adds the value at starting (index 0)
console.log(myarr)    // [8, 0, 1, 2, 3, 4, 5, 6]
myarr.shift()   // it removes element present at starting
console.log(myarr)  //  [0, 1, 2, 3, 4, 5, 6]

console.log(myarr.includes(10))  // it checks whether the element is present or not
// answer is false bcoz 10 is not present  // result is in boolean

console.log(myarr.indexOf(5))  // 5   , it returns the index of element present in array
// If the element is not present , then return index -1:

const newarr = myarr.join()  // it joins the array and convert into string
console.log(myarr)  //  [0, 1, 2, 3, 4, 5, 6]
console.log(newarr)  // 0,1,2,3,4,5,6 
console.log(typeof newarr)  // string


// SLICE AND SPLICE
// myarr =  [0, 1, 2, 3, 4, 5, 6]
console.log("A", myarr)   // A [0, 1, 2, 3, 4, 5, 6]

const new1 = myarr.slice(1,4)  // 4th index is not included in slice
console.log(new1)   // [ 1, 2, 3 ]
// In slice, original array is not changed

console.log("B", myarr)  // B [0, 1, 2, 3, 4, 5, 6]
const new2 = myarr.splice(1,4)  // 4th index is also included
console.log(new2)  // [ 1, 2, 3, 4 ]

console.log("C", myarr)   // C [ 0, 5, 6 ]  //In splice original array is changed, a portion is cut from array , remaining array is left