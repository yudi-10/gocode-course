/*
//1
const cat = {
    name: 'jely',
    color: 'Brown',
    sayMewo: function () {
        console.log('mewo')
    }
}

for (const key in cat) {
    console.log(key + ':' + cat[key])
}
*/

/*
//2
const cat = {
    name: 'jely',
    color: 'Brown',
    sayMewo: function () {
        console.log('mewo')
    }
}
let addAge = prompt('add a age of the cat')
cat.age += addAge
//לבדוק למה הוא עושה undefined

for (const key in cat) {
    console.log(key + ':' + cat[key])
}
*/

/*
//3
function chek() {
    const cat = {
        name: 'bery'
    }
    const enter = prompt('chek the name of the cat')
    if (enter === cat.name) {
        alert(true)
    } else {
        alert(false)
    }
}

chek()
*/

/*
//4
const cat1 = {
    name: 'bery',
    color: 'durk'
}
const cat2 = {
    age: 10,
    race: 'siamese'
}

function bigObj() {
    const full = {}
    for (const key in cat1) {
        full[key] = cat1[key]
    }
    for (const key in cat2) {
        full[key] = cat2[key]
    }
    console.log(full)
}

bigObj()
*/

/*
//5

const dogs = {}

for (let i = 0; i < 3; i++) {
    const dogsName = 'dog' + (i + 1)
    dogs[dogsName] = {}
    dogs[dogsName]['cplor'] = prompt('')
}

console.log(dogs)
*/


/*
//6
const cat = {
    name1: 'bery',
    name2: 'pizi',
    name3: 'mizi'
}

function chek() {
    const enter1 = prompt('chek the name of the cat number 1')
    const enter2 = prompt('chek the name of the cat number 2')
    const enter3 = prompt('chek the name of the cat number 3')

    if (enter1 === cat.name1) {
        console.log(true)
    } else {
        console.log(false)
    }
    if (enter2 === cat.name2) {
        console.log(true)
    } else {
        console.log(false)
    }
    if (enter3 === cat.name3) {
        console.log(true)
    } else {
        console.log(false)
    }
}

chek()
*/