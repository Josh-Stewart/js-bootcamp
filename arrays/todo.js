// create an array with five todos
// you have x todo
// print first and second to last items -> todo: walk the dog

const todoList = ['learn js', 'learn react', 'learn AWS', 'study maths', 'get a real job']

// console.log(`Todo: ${todoList[0]}`)
// console.log(`Todo: ${todoList[todoList.length-2]}`)

// todoList.splice(2,1)
// todoList.push('New item')
// todoList.shift()

console.log(`You have ${todoList.length} todos`)

// todoList.forEach(function (item, index) {
//     console.log(`${index + 1}. ${item}`)
// })

for (let i=0; i < todoList.length; i++) {
    const num = i + 1
    const todo = todoList[i]
    console.log(`${num}. ${todo}`)
}