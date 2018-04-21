let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

/*
let getSummary = function (book) {

    console.log(`${book.title} by ${book.author}`)
} */

//pass in object and return object
let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

let printSummary = function (bookSummary) {
    console.log(bookSummary.summary)
    console.log(bookSummary.pageCountSummary)
}

printSummary(bookSummary)
printSummary(otherBookSummary)

// Challenge

let fahrenheitConverter = function (fahrenheit) {
    return {
        farenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit + 459.67) * 5 / 9
    }
}

console.log(fahrenheitConverter(74))
