let num = Math.PI

console.log(num.toFixed(3))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 1
let max = 200

// Random numbers in a range
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

// Challenge area
let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return (randomNum === guess)
}

console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))
console.log(makeGuess(1))

