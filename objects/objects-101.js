let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author} (pages:${myBook.pageCount})`)

myBook.title = "Animal Farm"

console.log(`${myBook.title} by ${myBook.author} (pages:${myBook.pageCount})`)

// challenge

let person = {
    name: 'Josh',
    age: 37,
    location: 'Perth'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age = person.age + 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
