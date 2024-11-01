const mydate = new Date()
console.log(mydate)   // 2024-11-01T05:36:44.766Z
console.log(mydate.toDateString())  // Fri Nov 01 2024
console.log(mydate.toString())  //  Fri Nov 01 2024 05:36:44 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toISOString())  // 2024-11-01T05:43:56.937Z
console.log(mydate.toJSON())    // 2024-11-01T05:43:56.937Z
console.log(mydate.toLocaleDateString())   // 11/1/2024
console.log(mydate.toLocaleString())    // 11/1/2024, 5:43:56 AM
console.log(mydate.toLocaleTimeString())  // 5:43:56 AM
console.log(mydate.toTimeString())     // 05:43:56 GMT+0000 (Coordinated Universal Time)
console.log(mydate.getTimezoneOffset())    // 0
console.log(mydate.toLocaleTimeString())    // 5:43:56 AM
console.log(typeof mydate)     // object

// pass (year month date)
let mynewdate = new Date(2024, 10, 1)   // month index starts from 0
console.log(mynewdate.toLocaleString());  // 11/1/2024, 12:00:00 AM
console.log(mynewdate.toTimeString());   //  00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(mynewdate.toLocaleDateString())  // 11/1/2024

// pass (year, month, date, hour, minute, second)
let adate = new Date(2024, 10, 1, 11,46, 55)
console.log(adate.toLocaleString());  // 11/1/2024, 11:46:55 AM


let mycreatedDate =new Date("01-11-2024")
console.log(mycreatedDate.toLocaleString())  //1/11/2024, 12:00:00 AM

let mytimestamp = Date.now()
console.log(mytimestamp);   // 1730445416760  
console.log(mycreatedDate.getTime()); // get time in milisecond from 1 jan 1970
// for time in second
console.log(Math.floor(Date.now()/1000))  //  1730446056

let newDate = new Date()
console.log(newDate.getDate())  // 1
console.log(newDate.getDay())   // 5
console.log(newDate.getMonth() + 1) // 11
console.log(newDate.getFullYear())  // 2024


newDate.toLocaleString('default', {
    weekday:"long",
    second:"numeric"
})
//console.log(newDate.toLocaleString());
