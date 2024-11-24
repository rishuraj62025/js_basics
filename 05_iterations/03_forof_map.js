// ["", "", ""]
// [{}, {}, {}]

// for of loop
const myarray = [1,2,3,4,5]
for (const val of myarray) {
    console.log(val)
}
// o/p:
// 1
// 2
// 3
// 4
// 5

const greetings = "Rishu Raj"
for (const greet of greetings) {
    console.log(greet);
    
}
// o/p:
// R
// i
// s
// h
// u
 
// R
// a
// j

// Maps
// It stores unique values 
const map = new Map
map.set("IN", "India")
map.set("fr", "france")
map.set("jp", "japan")
map.set("jp", "japan")

console.log(map)   // Map(3) { 'IN' => 'India', 'fr' => 'france', 'jp' => 'japan' }

for (const element of map) {
    console.log(element)
}
//o/p:
// [ 'IN', 'India' ]
// [ 'fr', 'france' ]
// [ 'jp', 'japan' ]

for(const [key, value] of map)
{
    console.log(key, ':-', value)
}
// o/p:
// IN :- India
// fr :- france
// jp :- japan

for(const [key, value] of map)
    {
        console.log(key)
    }
// o/p:
// IN
// fr
// jp
for(const [key] of map)
    {
        console.log(key)
    }

const myObject = {
    game1 : "basketball",
    game2 : "cricket"
}

for(const [key, value] of myObject)
{
    console.log(key)  //  myObject is not iterable
}
// here, map is iterable , but object can't