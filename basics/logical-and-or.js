let temp = 65

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only Vegan')
} else if (isGuestOneVegan || isGuestTwoVegan)
{
    console.log('At least one vegan')
} else {
    console.log('No Vegan')
}

