class user {
    constructor(email, password)
    {
        this.email = email;
        this.password = password;
    }

    get email(){
     return this._email.toUpperCase();
    }

    set email(value){
     this._email = value;
    }


    // getter and setter by default present hota hai
    // hm getter and setter kisi bhi property pe lga skte hain
    // jis bhi property pe getter and setter lgate hain unpe 
    // property ke naam pe method bn jate hain get and set ka

    // agar hm get define kr rhe hain to 
    // set bhi define krna hi prega , ek nhi kr skte
    // get password(){
    //     return this.password.toUpperCase();
    // }
    // set password(value){
    //     this.password = value
    // }

    // ab yahan pe ek error aata hai ki set password function bhi
    // value set kr rha hai aur constructor bhi value set kr rha hai
    // to yahan pe ek race ho jata  hai ki dono baar baar 
    // value set krne lgte hain call stack full ho jata hai
    
    // to ab password overrite  ho rha hai  to get and set mein 
    // hm password se pehle _ lga diye hain , 
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value
    }

    // yahan pe jo password set ho rha hai wo to
    // value hi ho rha hai jo pass hua hai , pr 
    // jb hm get kr rhe hain tbhi bs uppercase ho rha hai
}   

const rishu = new user("rishu@gmail.com", "12abc3");
console.log(rishu.password)  // 12ABC3
console.log(rishu.email)     // RISHU@GMAIL.COM