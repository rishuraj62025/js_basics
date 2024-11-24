const nums = [ 1, 2, 3, 4]

const mytotal = nums.reduce( function(acc , currval) {
    console.log(`acc is ${acc} and currval is ${currval}`)              // acc is 0 and currval is 1
                                                                        // acc is 1 and currval is 2
                                                                        // acc is 3 and currval is 3
                                                                        // acc is 6 and currval is 4
    return acc + currval
}, 0)

console.log(mytotal)   // 10

// with arrow function
const total = nums.reduce( (acc, curr) => acc + curr , 0)
console.log(total) // 10


/// examples
ShoppingCart = [
    {
        course: "dsa course",
        price : 1999
    },
    {
        course: "java course",
        price : 999
    },
    {
        course: "py course",
        price : 499
    },
    {
        course: "ai/ml course",
        price : 4999
    },
    {
        course: "web dev course",
        price : 3999
    }
]

const totalPrice = ShoppingCart.reduce( (acc, item) => acc + item.price , 0)
console.log(totalPrice);   // 12495
