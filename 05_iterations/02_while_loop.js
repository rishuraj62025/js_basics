let num = 1
while (num<=8) {
 console.log(`value of num is ${num}`)
 num = num + 2
}
// o/p:
// value of num is 1
// value of num is 3
// value of num is 5
// value of num is 7


let myarray = ["batman" , "superman" , "spiderman"]
let arr = 0
while (arr < myarray.length) {
    console.log(`value of array is ${myarray[arr]}`);
    arr++
}
//o/p:
// value of array is batman
// value of array is superman
// value of array is spiderman


// do-while loop
let value = 1
do {
    console.log(`value is ${value}`);
    value++;
} while (value <= 4);
// o/p:
// value is 1
// value is 2
// value is 3
// value is 4