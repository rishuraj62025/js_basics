// forEach loop

const language = ["hindi", "maithali", "punjabi", "english"]

language.forEach(function (val) {
   // console.log(val)
})
//o/p:
// hindi
// maithali
// punjabi
// english

language.forEach( (val)=> {
    //console.log(val)
})
// o/p:
// hindi
// maithali
// punjabi
// english

function data(item)
{
  console.log(item)
}
language.forEach(data)
// o/p:
// hindi
// maithali
// punjabi
// english

language.forEach((item, index, arr) => {
console.log(item, index, arr)
})
//o/p:
// hindi 0 [ 'hindi', 'maithali', 'punjabi', 'english' ]
// maithali 1 [ 'hindi', 'maithali', 'punjabi', 'english' ]
// punjabi 2 [ 'hindi', 'maithali', 'punjabi', 'english' ]
// english 3 [ 'hindi', 'maithali', 'punjabi', 'english' ]


const myCoding = [ 
  {
    languagename : "javascript",
    filename : "js"
  },
  {
      languagename : "ruby",
    filename : "rb"
  },
  {
      languagename : "python",
    filename : "py"
  }
]

myCoding.forEach( (item) => {
  console.log(item.languagename)
})
//o/p:
// javascript
// ruby
// python


// for each loop value return nhi krta
const values = myCoding.forEach( (item) => {
  //console.log(item.languagename)
   return item
})
console.log(values)   // undefined
