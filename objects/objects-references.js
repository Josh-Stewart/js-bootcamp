let myAccount = {
    name: 'Josh',
    expenses: 0,
    income: 0,
}

// other account is a reference of myaccount and is not a copy
let otherAccount = myAccount
otherAccount.income = 1000

// manipulating the properties affects the refernced object
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

/* 
let addExpense = function (account, amount) {
    account = {} // reassigning account to point to another object. original passed in object is left as is.
    console.log(account)
} */

//pass by reference
addExpense(myAccount, 2.5)
console.log(myAccount)

// Challenge
// addIncome
let addIncome = function (account, amount) {
    account.income = account.income + amount
}

// resetAccount
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

// getAccountSummary
let getAccountSummary = function (account) {
    let accountBalance = account.income - account.expenses
    return `Account for ${account.name} has $${accountBalance}. $${account.income} in income. $${account.expenses} in expenses.`
}

//add income
//add expense
//add expense #2
//get account summary
//reset account
//get account summary

resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
addIncome(myAccount, 100)
addExpense(myAccount,10)
addExpense(myAccount,5)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
