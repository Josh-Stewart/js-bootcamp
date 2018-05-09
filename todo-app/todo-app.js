const todos = [{
    text: 'learn js',
    completed: true
}, {
    text: 'learn react',
    completed: false
}, {
    text: 'learn AWS',
    completed: false
}, {
    text: 'study maths',
    completed: false
}, {
    text: 'get a real job',
    completed: true
}]

// you have N todos left (p element)
const incompleteTodos = todos.filter( function (item, index) {
    //filter should return true if the item should be included in the new array being created
    return !item.completed
})

// Add new element
let paragraph = document.createElement('p')
paragraph.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(paragraph)

// add a p for each todo above
todos.forEach( function (item, index){
    paragraph = document.createElement('p')
    paragraph.textContent = `${item.text}` //no need to put this into a template string!
    document.querySelector('body').appendChild(paragraph)
})

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('Add a new todo...')
})

document.querySelector('#add-todo-text').addEventListener('input', function(e) {
    console.log(e.target.value)
})