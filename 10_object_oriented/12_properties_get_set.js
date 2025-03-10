function user(email, password)
{
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get : function() {
          return this._email.toUpperCase();
        }, 
        set : function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get : function() {
          return this._password.toUpperCase();
        }, 
        set : function(value){
            this._password = value
        }
    })
}

const chai = new user("rishu123@gmail.com", "abc123")
console.log(chai)  // user { _email: 'rishu123@gmail.com', _password: 'abc123' }
console.log(chai.email)  // RISHU123@GMAIL.COM