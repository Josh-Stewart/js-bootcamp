let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 3)
console.log(result)

// default args
let getScoreText = function (name = 'Player unknown', score = 0) {
    return 'Name: ' + name + ' Score: ' + score
}

console.log(getScoreText())
console.log(getScoreText('Josh'))
console.log(getScoreText('Josh', 200))
console.log(getScoreText(undefined, 99))

// Challenge

let calcTip = function (total, tipPercentage = 0.2) {
    return total * tipPercentage
}

console.log(calcTip(100))

console.log(calcTip(100, 0.3))
