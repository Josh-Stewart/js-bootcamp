
//accessing variables inside an object
let restaurant = {
    name: 'Gibbos',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        return (this.guestCount + partySize <= this.guestCapacity)
    }, 
    seatParty: function (partySize) {
        if (partySize !== undefined) {
            if (this.checkAvailability(partySize)) {
                this.guestCount = this.guestCount + partySize
            } else {
                console.log('Sorry we are full')
            }
        }
    },
    removeParty: function (partySize) {
        if (partySize !== undefined) {
            if (partySize < this.guestCount) {
                this.guestCount = this.guestCount - partySize
            } else {
                console.log('Cannot remove more guests than we have')
            }
        }
    }
}

restaurant.seatParty(72)
console.log(restaurant)

restaurant.seatParty(4)
console.log(restaurant)

let status = restaurant.checkAvailability(4)
console.log(status)

restaurant.removeParty(4)
console.log(restaurant)

restaurant.seatParty(4)
console.log(restaurant)

status = restaurant.checkAvailability(4)
console.log(status)

restaurant.removeParty(78)
console.log(restaurant)
