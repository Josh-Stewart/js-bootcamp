//lexical scope (static scope)
//global scope - defined outside of all code blocks
//local scope - defined inside a code block

// in a scope you can access to variables defined in the scope, or in any parent scopes.

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}

console.log(varTwo)