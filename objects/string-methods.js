let name = '   Josh Stewart  '

// length property
console.log(name.length)

// convert to uppercase
console.log(name.toUpperCase())

// convert to lowercase
console.log(name.toLowerCase())

let password = 'ABC123password'
console.log(password.includes('password'))

// trim
console.log(name.trim())

// challenge area

// length > 8 and doesnt contain the word password
let isValidPassword = function (password) {
    let checkPass = password.toLowerCase()
    let passwordOk = !checkPass.includes('password')
    return (password.length > 8 && passwordOk)
}

console.log(isValidPassword('absdf'))
console.log(isValidPassword('absdf$#$@# $@# '))
console.log(isValidPassword('absdfpassword'))