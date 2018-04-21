const notes = ['Note 1','Note 2','Note 3']

// notes.pop()
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1, 1, 'New second item')

notes[2] = 'New note 3'

notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes)


// Counting... 1
for (let i = 0; i <= 2; i++) {
    console.log(i)
}

for (let i=0; i < notes.length; i++) {
    console.log(notes[i])
}

//console.log(notes.indexOf('note 2'))
