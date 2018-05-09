const notes = [{
    title: 'My next trip',
    body: 'I would like to go to mars'
}, {
    title: 'House mods',
    body: 'Remove tree from garden'
}, {
    title: 'Habbits to work on',
    body: 'Coding argh!'
}]

document.querySelector('#create-note').addEventListener('click', function (event) {
    console.log(event) 
    event.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function (event) {
    document.querySelectorAll('.note').forEach(function (item, index) {
        item.remove()
    })
})

// -- Single --
// p
// #replace
// .item

// -- Multiple --
// p#order               - paragraph with id of order
// button.inventory      - button with class of inventory

// order of these two dont matter (but tag/element has to come first)
// h1#title.application  - any h1 with id of title and class of application
// h1.application#title  - any h1 with class of application and id of title

document.querySelector('#search-text').addEventListener('change', function (e) {
    console.log(e.target.value)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})