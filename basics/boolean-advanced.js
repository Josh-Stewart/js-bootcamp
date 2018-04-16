let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log('Account is locked')
} else if (userRole === 'admin') {
    console.log('Welcome ' + userRole)
} else {
    console.log('Welcome')
}


let temp = 67

if (temp <= 31) {
    console.log('Its freezing outside')
} else if (temp >= 60) {
    console.log('its hot outside')
} else {
    console.log('Go for it. its is pretty nice')
}
