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

// DOM

// Query and remove 1
// const p = document.querySelector('p')
// p.remove()

// Query all and remove
const ps = document.querySelectorAll('p')
ps.forEach(function (p) {

    //p.textContent = '****' //censor content
    //console.log(p)
    p.remove()
})

// Add new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from Javascript'
document.querySelector('body').appendChild(newParagraph)