// DOM

// Query and remove 1
// const p = document.querySelector('p')
// p.remove()

// Query all and remove
const ps = document.querySelectorAll('p')
ps.forEach(function (p) {
    p.textContent = '****'
    //console.log(p.textContent)
    //p.remove()
})