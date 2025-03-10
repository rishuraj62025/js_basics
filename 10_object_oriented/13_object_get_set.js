const user = {
    _email : "rishu@gmail.com",
    _password : "123abc" ,


    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value
    }
}

const tea  = Object.create(user);
console.log(tea.email) // RISHU@GMAIL.COM