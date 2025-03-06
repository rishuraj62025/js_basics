function SetUserName(username)
{
    // complex DB Calls
    this.username = username
}

function createUser(username, email, password)
{
    // yahan pe this as a reference bhejna prta hai, yahan hm chahte hain hm apna this bhej ke store karaye value,
    // call function reference hold krke rkhta hai ki kahan se call hua hai
    // call ka use krte hain jb ek function se dusre function ko call kr rhe
    SetUserName.call(this,username)

    this.email = email
    this.password =password
}

const chai = new createUser("chai", "abc@gmail.com", "123")
console.log(chai);
// o/p:  createUser { username: 'chai', email: 'abc@gmail.com', password: '123'}
  