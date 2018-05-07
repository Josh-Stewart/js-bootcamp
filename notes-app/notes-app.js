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

document.querySelector('button').addEventListener('click', function (event) {
    console.log(event) 
    event.target.textContent = 'The button was clicked'
})

