const todos = [{
    text:'learn js',
    completed: true
},{
    text:'learn react',
    completed: false
},{
    text:'learn AWS',
    completed: false
},{
    text: 'study maths',
    completed: false
},{
    text: 'get a real job',
    completed: true
}]


// use findIndex
const findTodo = function (todos, searchString) {
    searchString = 'get a real job'
    return todos.findIndex(function (item, index) {
        return item.text.toLowerCase() === searchString.toLowerCase()
    })
}

// deletes a todo from a todo list if it is found
const deleteTodo = function (list, searchString) {
    const index = findTodo(list, searchString)
    if (index > -1) {
        list.splice(index,1)
    }
}

const sortByCompleted = function (todoArray) {
    todoArray.sort(function (a,b) {
        if (!a.completed && b.completed){
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }

    })
}

sortByCompleted(todos)
console.log(todos)

//let text = 'Learn JS'
//deleteTodo(todos, text)
//console.log(todos)

const getThingsToDo = function (todos) {
    return todos.filter(function (item, index) {
        return !item.completed
    })    
}

//console.log(getThingsToDo(todos))

