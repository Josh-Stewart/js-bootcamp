// Function - input(arguments), code, output

let greetUser = function () {
    console.log('Welcome user')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

console.log(square(3))
console.log(square(10))


// Challenge

let convertFahrenheitToCelcius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

console.log(convertFahrenheitToCelcius(32))
console.log(convertFahrenheitToCelcius(68))