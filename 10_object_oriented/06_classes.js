class user {
    constructor(username, email, password)
    {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
     return `${this.password}abc`;
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai", "chai@gmail.com", "123")
console.log(chai);  // user { username: 'chai', email: 'chai@gmail.com', password: '123' }
console.log(chai.encryptPassword())  // 123abc
console.log(chai.changeusername())   // CHAI


// behind the same , if there is no class concept present 

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new user("tea", "tea@gmail.com", "123")
console.log(tea);  // user { username: 'tea', email: 'tea@gmail.com', password: '123' }
console.log(tea.encryptPassword())  // 123abc
console.log(tea.changeusername())   // TEA