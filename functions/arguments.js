let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 3)
console.log(result)

// default args
let getScoreText = function (name = 'Player unknown', score = 0) {
    //return 'Name: ' + name + ' Score: ' + score
    return `Name: ${name} - Score: ${score}`
}

console.log(getScoreText())
console.log(getScoreText('Josh'))
console.log(getScoreText('Josh', 200))
console.log(getScoreText(undefined, 99))

// Challenge

let calcTip = function (total, tipPercentage = 0.2) {
    let percent = tipPercentage * 100
    let tip = total * tipPercentage
    return `A ${percent}% tip on $${total} would be $${tip}`
}

console.log(calcTip(100))

console.log(calcTip(100, 0.3))

//valid strings
let name = "Josh"
name = 'Josh'

//template strings
name = 'Josh'
let age = 37
console.log(`My name is ${name} and my age is ${age}`)