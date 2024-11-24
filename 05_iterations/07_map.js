const array = [10, 20, 30, 40, 50, 60]

const ans = array.map( (val) => val + 10)
console.log(ans)   // [ 20, 30, 40, 50, 60, 70 ]


// chaining
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const answer = numbers.map( (num) => num*10).map( (num) => num + 2).filter( (num) => num > 50)
console.log(answer);  // [ 52, 62, 72, 82 ]
