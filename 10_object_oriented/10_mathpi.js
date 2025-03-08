const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')
// yahan pe Math ek module hai jisse 'PI' property le rhe
console.log(descriptor)
// o/p:
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

const chai ={
    name:'ginger tea',
    price: 200,
    isAvailable : true,

    orderchai : function(){
        console.log("tea not prepared")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,'name'))
// o/p:
// {
//     value: 'ginger tea',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

Object.defineProperty(chai, 'name', {
    writable : false,
    enumerable: true
})

// console.log(Object.getOwnPropertyDescriptor(chai,'name'))
// // o/p:
// {
//     value: 'ginger tea',
//     writable: false,
//     enumerable: true,
//     configurable: true
//   }

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function')
    {
        console.log(`${key} : ${value}`)
    }
    
}
// O/P:
// name : ginger tea
// price : 200
// isAvailable : true
// 
//     }
