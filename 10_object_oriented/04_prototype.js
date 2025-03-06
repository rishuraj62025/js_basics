let myheros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

// here, we inject a method directly into object. 
// now this method is available for all the object, array, function, string
Object.prototype.rishu = function(){
    console.log(`rishu is present in all objects`);
}

// here, we inject a method directly into array. 
// now this method is available for all the array 
Array.prototype.heyrishu = function(){
    console.log(`Hey, rishu this side`)
}

heroPower.rishu()   // rishu is present in all objects
myheros.rishu();    // rishu is present in all objects

myheros.heyrishu(); // Hey, rishu this side 
//heroPower.heyrishu()  // this is not true, it gives error
// because object is top in hierarchy  between array, string, object, function
// this will discussed in last slide (03_prototype.js)


// inheritance 

const user = {
    name:"rishu",
    email:"rishu@gmail.com"
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS assignment",
    fullTime : true,
    // TASupport takes the property of teachingSupport
    __proto__ : teachingSupport
}

// this is done to take the propery of user object into teacher object
teacher.__proto__ = user

console.log(`Teacher name is ${teacher.name} and email is ${teacher.email}`)
// o/p: Teacher name is rishu and email is rishu@gmail.com

// Modern syntax
Object.setPrototypeOf(teachingSupport, teacher)
console.log(`${teachingSupport.makeVideo}`)  // true
// this is modern syntax to take the property of one object into another,
// this is called inheritance 
// here, teachingSupport takes the property of teacher


// ================================================================================

let anotherUserName = "     ChaiAurCode            ";
String.prototype.truelength = function(){
    console.log(`${this}`);  //      ChaiAurCode    // print with space  
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUserName.truelength();  // True length is: 11

"rishuraj    ".truelength();  // True length is: 8

// yahan pe this ka mtlb hai current context, jisne call kiya hai