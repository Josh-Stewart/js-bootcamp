//global scope (convertFahrenheightToCelcius, tempOne, tempTwo)
    //local scope (fahrenheight, celcius)
        //local scope (isFreezing)

let convertFahrenheightToCelcius = function (fahrenheight) {
    let celsius = (fahrenheight - 32) * 5 / 9
    if (celsius <= 0) {
        let isFreezing = true
    } 
    return celsius
}

let tempOne = convertFahrenheightToCelcius(32)
let tempTwo = convertFahrenheightToCelcius(68)

console.log(tempOne)
console.log(tempTwo)