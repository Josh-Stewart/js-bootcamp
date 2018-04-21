//global scope (convertFahrenheitToCelcius, tempOne, tempTwo)
    //local scope (fahrenheit, celcius)
        //local scope (isFreezing)

let convertFahrenheitToCelcius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    if (celsius <= 0) {
        let isFreezing = true
    } 
    return celsius
}

let tempOne = convertFahrenheitToCelcius(32)
let tempTwo = convertFahrenheitToCelcius(68)

console.log(tempOne)
console.log(tempTwo)