//undefined for variable
let name

name = 'Jen'

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// undefined for function argument
// undefined as function returned no value
let square = function(num) {
    console.log(num)
}

let result = square(3)
result = square()
console.log(result)


// null as assigned value
let age = 27
age = null
console.log(age)
