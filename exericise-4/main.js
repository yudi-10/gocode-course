/*
//1
function last2(str) {
    console.log(str.slice(-2))
}
last2('yudi')
*/

/*
//2
function index(str) {
    for (i = 0; i < str.length; i++) {
        console.log(str[i])
    }
}
index('hello my name is yudi')
*/

/*
//3
let num = 0
function index(str, letter) {
    for (i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            num++
        }
    }
    return num
}
const test = index('w3resource.com', 'o')
console.log(test)
*/


/*
//4 / 5
function fullString(str1, str2) {
    let fstr = ''
    for (i = 0; i < str1.length || i < str2.length; i++) {
        if (i < str1.length) {
            fstr += str1[i]
        }
        if (i < str2.length) {
            fstr += str2[i]
        }
    }
    console.log(fstr)
}

fullString('ace', 'bdfhghgj')
*/

/*
//6
function unique(str) {
    let str1 = ''
    for (i = 0; i < str.length; i++) {
        if (str1.indexOf(str[i]) < 0) {
            str1 += str[i]
        }
    }
    console.log(str1)
}

unique('thequickbrownfoxjumpsoverthelazydog')
*/

function firstSingelLetter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i]

        }
    }
}

firstSingelLetter('aab')