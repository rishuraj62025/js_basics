function SetUserName(username)
{
    // complex DB Calls
    this.username = username
}

function createUser(username, email, password)
{
    // yahan pe this as a reference bhejna prta hai
    SetUserName.call(this,username)

    this.email = email
    this.password =password
}

const chai = new createUser("chai", "abc@gmail.com", "123")
console.log(chai);
// o/p:  createUser  username: 'chai', email: 'abc@gmail.com', password: '123'}
  