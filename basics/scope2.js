// global (name)
    // local (name)
        // local
    //loca

//let name = 'Josh'

if (true) {
    //let name = 'Mike' //variable shadowing

    if (true) {
        name = 'Jen'
        console.log(name)
    }

    console.log(name)
}

if (true) {
    console.log(name)
}



////////////////////////////
//LEAKED GLOBAL
// global (name)
// local (name)
// local
//loca

//let name = 'Josh'

if (true) {
    //let name = 'Mike' //variable shadowing

    if (true) {
        name = 'Jen'
        console.log(name)
    }

    console.log(name)
}

if (true) {
    console.log(name)
}