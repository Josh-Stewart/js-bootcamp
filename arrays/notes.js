const notes = [{
    title: 'My next trip',
    body: 'I would like to go to mars'
}, {
    title: 'Habbits to work on',
    body: 'Coding'
}, {
    title: 'House modifications',
    body: 'Remove tree from the back garden'
}]

// use array.find
const findNote = function (notes, noteTitle) {
    return notes.find(function (item, index) {
        return item.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// use array.findIndex
// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (item, index) {
//         return item.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'house modifications')
console.log(note)

