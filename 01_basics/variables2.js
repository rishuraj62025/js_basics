const accountId =34256
let accountName="Rishu Raj"
var accountPassword="Rishu2002"
accountCity="Bhopal"
let accountState
//accountId = 87432 ->Redeclaration of const variable is not allowed

accountName="Rishu Raj Sharma"
accountPassword="Rishu6202"
accountCity="Bengaluru"


console.log(accountId)
console.table([accountId, accountName, accountPassword, accountCity,accountState])  
// output is table in which all variables declare

/*
Prefer not to use var
because of issue in block scope and functional scope
*/