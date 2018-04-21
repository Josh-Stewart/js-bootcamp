let myAccount = {
    name: 'Josh',
    expenses: 0,
    income: 0,
}

// other account is a reference of myaccount and is not a copy
let otherAccount = myAccount
otherAccount.income = 1000

/*
// manipulating the properties affects the refernced object
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
} */

let addExpense = function (account, amount) {
    account = {} // reassigning account to point to another object. original passed in object is left as is.
    console.log(account)
}

//pass by reference
addExpense(myAccount, 2.5)
console.log(myAccount)