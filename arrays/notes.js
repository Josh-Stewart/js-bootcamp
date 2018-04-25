const notes = [{
    title: 'My next trip',
    body: 'I would like to go to mars'
}, {
    title: 'Habbits to work on',
    body: 'Coding argh!'
}, {
    title: 'House modifications',
    body: 'Remove tree from the back garden'
}]

// function to find a note given a complete noteTitle.
// use array.find which returns the object back that it finds in the array
const findNote = function (notes, noteTitle) {
    return notes.find(function (item, index) {
        return item.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, searchTerm) {
    //filter method does not change notes array - so save it to a new array
    return notes.filter(function (item, index) {
        //the callback function that is passed to the filter method returns a boolean
        //if true, the item should be kept in the new array we are generating
        //if false, the item should not be kept as a part of the new array we are generating
        return (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.body.toLowerCase().includes(searchTerm.toLowerCase()))
    })
}

console.log(findNotes(notes,'ar'))

// use array.findIndex
// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (item, index) {
//         return item.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'house modifications')
console.log(note)

