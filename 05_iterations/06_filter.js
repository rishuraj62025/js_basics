// filter

const nums = [1,2,3,4,5,6,7,8,9,10]

const answer = nums.filter( (num) => num > 4 )
console.log(answer)   // [ 5, 6, 7, 8, 9, 10 ]

const values = nums.filter( (num) =>{ 
    return num > 4 
})
console.log(values)   // [ 5, 6, 7, 8, 9, 10 ]


//-----------------------------------------------
// above work done by foreach also 
const mynums = []

nums.forEach( (num) => {
    if(num > 4)
    {
        mynums.push(num)
    }
})
console.log(mynums)   // [ 5, 6, 7, 8, 9, 10 ]


//----------------------------------------------------

let Books = [
    {
        title : "Book One" , genre : "Fiction" , publish : 2010 , edition : 2024
    },
    {
        title : "Book Two" , genre : "Non Fiction" , publish : 2014 , edition : 2022
    },
    {
        title : "Book Three" , genre : "Non Fiction" , publish : 2006 , edition : 2012
    },
    {
        title : "Book Four" , genre : "History" , publish : 2004 , edition : 2016
    },
    {
        title : "Book Five" , genre : "Science" , publish : 2002 , edition : 2010
    },
    {
        title : "Book Six" , genre : "History" , publish : 1999 , edition : 2010
    },
    {
        title : "Book Seven" , genre : "Science" , publish : 2000 , edition : 2015
    },
    {
        title : "Book Eight" , genre : "Mathematics" , publish : 1996  , edition : 2005
    },
   
]

const ourbooks = Books.filter( (BK) => BK.edition >2015 && BK.publish > 2010)
console.log(ourbooks)
// o/p:
// [
//     {
//       title: 'Book Two',
//       genre: 'Non Fiction',
//       publish: 2014,
//       edition: 2022
//     }
//   ]