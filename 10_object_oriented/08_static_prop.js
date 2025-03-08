class user {
    constructor(username){
      this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }

  static createId(){
        return `123`
    }
}

const rishu = new user("Rishu");

// static keyword ke karan rishu createId function ko access
// nhi kr paa rha
console.log(rishu.createId())  

class Teacher extends user{
    constructor(username, email)
    {
        super(username);
        this.email = email;
    }
}

const newuser = new Teacher("raj", "raj@gmail.com")

// static keyword ke karan newuser(extend class) bhi createId function ko access
// nhi kr paa rha
console.log(newuser.createId())