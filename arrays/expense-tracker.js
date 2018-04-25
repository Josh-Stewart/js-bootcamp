const account = {
    name: 'Josh',
    expenses: [],
    incomes: [],
    addExpense: function (description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.incomes.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function (){
        let expenseTotal = 0
        let incomeTotal = 0
        let balance = 0
        this.expenses.forEach(function (item, index){
            expenseTotal += item.amount
        })
        this.incomes.forEach(function (item, index) {
            incomeTotal += item.amount
        })
        
        balance = incomeTotal - expenseTotal
        return `${this.name} has a balance of $${balance}. $${incomeTotal} in income. $${expenseTotal} in expenses`
    }    
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 3.5)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())
