// object literals  =>const tinder = {}

// object constructor
const tinder = new Object()
tinder.name ="Rishu Raj"
tinder.age = 22 
tinder["roll-no"] = 103

console.log(tinder)   // { name: 'Rishu Raj', age: 22, 'roll-no': 103 }

//nested objects
const newuser = {
    fullname: {
        fullusername: {
            firstname: "Rishu",
            middlename: "Raj",
            lastname: "Sharma"
        }
    }
}

console.log(newuser)   
//  o/p: {
//     fullname: {
//       fullusername: { firstname: 'Rishu', middlename: 'Raj', lastname: 'Sharma' }
//               }
//       }

console.log(newuser.fullname.fullusername)   // { firstname: 'Rishu', middlename: 'Raj', lastname: 'Sharma' }
console.log(newuser.fullname.fullusername.lastname)  // Sharma
//console.log(newuser.fullname?.fullusername.lastname)  // discuss later (?)


// Object merge
const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "C", 4: "D"}
const obj3 = {5: "E", 6: "F"}

const obj4 = {obj1, obj2, obj3}
// console.log(obj4)
// o/p: {
//   obj1: { '1': 'A', '2': 'B' },
//   obj2: { '3': 'C', '4': 'D' },
//   obj3: { '5': 'E', '6': 'F' }
// }

// assign => used to add multiple objects into single object
const obj5 = Object.assign({},obj1,obj2,obj3)
console.log(obj5)   // { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', '6': 'F' }

// spread operator, it also add multiple objects into single object
const obj6 = {...obj1,...obj2,...obj3}
console.log(obj6)   // { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', '6': 'F' }


// database se jb value aati hai to kaise store hoti hai
// database se jb data aata hai to wo array of objects ke form mein aata hai
const users = [{
    name1: "Rishu Raj",
    branch: "CSE"
},
{
    name2: "neetesh",
    branch:"AU"
},
{
    name3: "ayush",
    branch:"CSBS"
}
]
console.log(users[1].name2)  // neetesh

console.log(Object.keys(tinder))   // [ 'name', 'age', 'roll-no' ]
console.log(Object.values(tinder));// [ 'Rishu Raj', 22, 103 ]
console.log(Object.entries(tinder)) // [ [ 'name', 'Rishu Raj' ], [ 'age', 22 ], [ 'roll-no', 103 ] ]

console.log(tinder.hasOwnProperty('age'))  // true ,it checks given properties present in object or not
console.log(tinder.hasOwnProperty('marks'))// false

// destructuring of array will see later
// destructuring of object
const course ={
    coursename:"js hindi",
    courseprice:"999",
    courseInstructor:"Hitesh"
}

const {courseInstructor : instructor, courseprice: price} = course  // for convenience we changed the name of courseInstructor to instructor 
console.log(instructor)  // hitesh
console.log(price)       // 999


// Introduction JSON api
// api mein kuch values aati hai backend se ,usko aap kaise likhte hain ,kaise use krte hain whi api hai,pehle wo value aati thi
// xml mein wo bahut complex tha, ab aati hai json mein
// hotel mein jo menu card hota hai wo bhi ek type ka api ka documentation hi hai 
// object without name
// {
//     "name": "rishu",
//     "companyname": "rubex",
//     "producttype": "watch"
//     "price": 999
// }

// [
//     {},
//     {},
//     {}
// ]