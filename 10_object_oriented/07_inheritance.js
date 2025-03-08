class user {
    constructor(username){
      this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

const name = new user("Rishu")
console.log(name.logMe());  // username is Rishu

class Teacher extends user {
    constructor(username, email, password){
        // yahan super keyword ka use ye hai ki yahan pe super keyword
        // khud hi call(reference) , this(current context) saath mein le jata hai 
        // aur value set kr deta hai
        super(username)
        this.email = email;
        this.password = password;
    }

    addcourse(){
        console.log(`A new couse was added by ${this.username}`)
    }
}

const Name = new Teacher("raj", "abc@gmail.com", "12345")
 console.log(Name);  // Teacher { username: 'raj', email: 'abc@gmail.com', password: '12345' }
 Name.addcourse();  // A new couse was added by raj

 console.log(name === Name)  // false
 console.log(Name instanceof Teacher)  // true
 console.log(Name instanceof user)     // true
 console.log(name instanceof user)     // true