const notes = ['','','']

notes.pop()
notes.push('My new note')

console.log(notes.shift())
notes.unshift('My first note')

notes.splice(1, 1, 'New second item')

notes[2] = 'New note 3'

notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})



// Counting... 1
for (let i = 0; i <= 2; i++) {
    console.log(i)
}

for (let i=0; i < notes.length; i++) {
    console.log(notes[i])
}


// wont find empty objects in the array (see proof below)
console.log(notes.indexOf({}))

//object equality not true because they are not the same object
console.log({} === {})

//objects are pointing to the same object
let someObject = {}
let otherObject = someObject
console.log(someObject === otherObject)


const index = notes.findIndex(function (item, index) {
    console.log(item)
    return item.title === 'Habbits to work on'
})

console.log(index)


///////////////////////////////////////////////////////////

// create an array with five todos

const todoList = ['learn js', 'learn react', 'learn AWS', 'study maths', 'get a real job']

console.log(`Todo: ${todoList[0]}`)
console.log(`Todo: ${todoList[todoList.length - 2]}`)

todoList.splice(2, 1)
todoList.push('New item')
todoList.shift()

console.log(`You have ${todoList.length} todos`)

todoList.forEach(function (item, index) {
    console.log(`${index + 1}. ${item}`)
})

for (let i = 0; i < todoList.length; i++) {
    const num = i + 1
    const todo = todoList[i]
    console.log(`${num}. ${todo}`)
}

