/*
const text = prompt('enter any text')
for (let i = 0; i < 10; i++) {
    console.log(text)
}
*/

/*
const num = prompt('henter any number')
for (let num = 0; num < 10; num++) {
    console.log('Hello')
}
*/

/*
const num = parseInt(prompt('enter how meny ests did you take?'))
let min = 0
for (let x = 0; x < num; x++) {
    let res = parseInt(prompt('enter the resolts of test number ' + (x + 1)))
    min = res + min
}
console.log(min / num)
*/

/*
let text = prompt('enter any text')
for (; text != 'stop';) {
    text = prompt('enter anathor text')
}
*/

/*
let text = prompt('enter any text')
let i = 0
while (i < 10) {
    text += ""; i++
    console.log(text)
}
*/

/*
const test = parseInt(prompt('how meny test did you take?'))
let min = 0
let x = 0
while (x < test) {
    let res = parseInt(prompt('wat is the resolt of the test number ' + (x + 1)))
    x++
    min = res + min
}
console.log(min / test)
*/

/*
let text = prompt('enter any text')
do {
    text = prompt('enter anather text')
} while (
    text != 'stop'
)
*/

/*
let num = parseInt(prompt('enter a number'))
if (num < 5) {
    alert('the number is low')
} else {
    alert('the number is big')
}
*/

/*
let num = parseInt(prompt('enter a number'))
if (num < 5) {
    alert('the number is low')
} else if (num === 5) {
    alert('the number is 5')
} else {
    alert('the number is big')
}
*/

/*
const letter = prompt('enter a letter')
if (letter === 'a') {
    alert('a is good')
} else if (letter === 'b') {
    alert('b is like me')
} else if (letter === 'c') {
    alert('c is the big one')
} else {
    alert('your letter is pretty')
}
*/

/*
let num = parseInt(prompt('how meny stodent did you ave?'))
for (i = 0; i < num; i++) {
    const name = prompt('enter the name of the stodents')
    console.log(name)
}
*/

/*
const num = parseInt(prompt('כמה תלמידים יוצאים לטיול'))
if (num <= 10) {
    alert('דרוש חובש אחד ערכת עזרה ראשונה אחת ומאבטח אחד')
} else if (num > 10) {
    alert('צריך 2 חובשים ו3 ערכות עזרה ראשונה ו4 מאבטחים')
}
alert('נסיעה טובה')
*/

/*
const nam = 3
for (let nam = 3; nam <= 20; nam++) {
    console.log(nam)
}
*/

/*
function makeOmlette(name1, typeOfEgg) {
    name1 = prompt('enter your name')
    typeOfEgg = prompt('enter the type of egg')
    console.log('hello ' + name1)
    console.log('take the egg out of the fridge')
    console.log('brake the egg and put the inside in a container vesse')
    console.log('mix')
    console.log('take the pan and heat it on the egg')
    console.log('if the oil is hot enough take the mixed egg')
    console.log('when one side looks redy flip it')
    console.log('put the ' + typeOfEgg + 'in a dish and eat')
}

makeOmlette()

//makeOmlette()
*/

/*
function fullName(first, last) {
    console.log(first + last)
}
const firstName = prompt('enter your name')
const lastName = prompt('enter your last name')

fullName(firstName, lastName)
*/

/*
function num(num1, num2, num3) {
    let bignum = num1
    if (bignum < num2) {
        bignum = num2
    }
    if (bignum < num3) {
        bignum = num3
    }

    console.log(bignum)
}

let num1 = parseInt(prompt('enter the first number'))
let num2 = parseInt(prompt('enter the secend number'))
let num3 = parseInt(prompt('enter the third number'))

console.log(num(num1, num2, num3))
*/

/*
function num(bigNum) {
    let num1 = bigNum
    if (num1 < 0) {
        alert('The number is low')
    } else if (num1 === 0) {
        alert('The number is zero')
    } else {
        alert('The number is high')
    }
}

let bigNum = parseInt(prompt('enter a number'))
alert(num(bigNum))
*/

/*
function enter(age) {
    let bage = age
    if (bage < 18) {
        alert('You cannot enter')
    } else {
        alert('You can enter')
    }

}

function enter2(age2) {
    let bage2 = age2
}
let name1 = prompt('Enter your name')
let bage2 = parseInt(prompt('Enter your age'))

alert((enter(bage2)))
*/


/*
function fullMail(fMail, lMail) {
    fMail = prompt('enter your first part of your email')
    lMail = prompt('enter your last part of your email')
    //return fMail, lMail
    console.log(fMail + '@' + lMail)
}

fullMail()
*/

/*
function club(name, age) {
    //const name1 = prompt('enter your name')
    if (age < 18) {
        return 'hello ' + name + ' yuo canout go in to the club'
    } else {
        return 'hello ' + name + ' welcome to the club'
    }
}

let ageClab = club(prompt('enter your age'))
let nameClub = club(prompt('enter your name'))
alert(nameClub)
*/

/*
function fullName(firstName, lastName) {
    firstName = prompt('enter your first name')
    lastName = prompt('enter your last name')
    alert(firstName + ' ' + lastName)
}

fullName()
*/

/*
function num(num1, num2, num3) {
    num1 = parseInt(prompt('enter any number'))
    num2 = parseInt(prompt('enter anuther number'))
    num3 = parseInt(prompt('enter anuther number'))
    if (num1 > num2 && num1 > num3) {
        alert(num1)
    } else if (num2 > num1 && num2 > num3) {
        alert(num2)
    } else {
        alert(num3)
    }
}

num()
*/

/*
function num(number) {
    number = parseInt(prompt('enter any number'))
    if (number < 0) {
        console.log('the number is folse')
    } else if (number > 0) {
        console.log('the number is true')
    } else {
        console.log('the number is 0')
    }
}

num()
num()
num()
num()
*/

/*
function selector(firstName, lastName, age) {
    firstName = prompt('enter your first name')
    lastName = prompt('enter your last name')
    age = parseInt(prompt('enter your age'))
    if (age < 18) {
        alert('hello ' + firstName + ' ' + lastName + ' your cannot enter')
    } else {
        alert('hello ' + firstName + ' ' + lastName + ' you can enter')
    }
}

//selector()

function selector2() {
    selector()
}

selector2()
selector2()
*/

/*
function index(name, email, age, phone) {
    name = prompt('enter a name')
    email = prompt('enter a email')
    age = prompt('wat is your age')
    phone = prompt('wat is your phone number')
    alert('hello ' + name + ' your email is ' + email + ' and your age is ' + age + ' and your phone number is ' + phone)
}

index()
*/

/*
const name1 = prompt('enter a name')
const age = parseInt(prompt('enter your age'))
const phone = prompt('enter your phone number')

if (age >= 18) {
    alert('hello ' + name1 + ' welcome to th club')
    console.log(name1, phone, age)
} else {
    alert('you arh to yung..')
}
*/
/*
const name1 = 'hello'
console.log(name1.length)

if (name1.length < 10) {
    console.log('low then 10')
} else {
    console.log('bigger then 10')
}
console.log(name1[name1.length - 2])
*/
/*
function last3(str) {
    console.log(str[str.length - 2], str[str.length - 1])
}
last3('mizrahi')

function last2(str) {
    console.log(str.slice(-2))
}
last2('mizrahi')

const x = 'hello my name is yudi'
for (let i = 0; i < x.length; i++) {
    console.log(x[i])
}
*/

/*
function index(str) {
    //let str = ''
    for (i = 0; i < str.length; i++) {
        console.log(str[i])
    }
}
index('hello my name is yudi')
*/
/*
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


/*
let counter = 0
function total(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            counter++;
        }
    }
    return counter
}

const test = total('hellok', 'l')
console.log(test)
*/

// function fullString(str1, str2) {
//     for (i = 0; i < str1.length; i++) {
//         for (x = 0; x < str2.length; x++) {
//             console.log(str1)
//         }
//         console.log(str2)
//     }
// }

// fullString('ace', 'bdf')
/*
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

fullString('ace', 'bdf')
*/

// function string(str) {
//     for (i < 0; i = str.length; i++) {
//         if ()
//     }
// }


// const arr = [1, 2, 3, 4, 5, 6];
// const strArr = ["almog", "brad", "carl"];
// const arrArr = [["almog", "sammy"], ["brad", "ben"], ["carl", "candy"]];
// const objArr = [
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
//   { name: "almog" },
// ];
// const mixedArr = [1, 8, "a", 5, true, false, {}, { name: "almog" }];

// console.log(arr[0], arr[arr.length-1])

// console.log(strArr[0][3],strArr[1],strArr[2])
// console.log(arrArr[0][1][4])

// //arrArr[0] = ["almog", "sammy"]
// //arrArr[0][1] = "sammy"
// //arrArr[0][1][4] = "y"

// console.log(strArr.length)
// console.log(strArr[strArr.length-1])
// for(let i = 0; i < strArr.length; i++){
//     console.log(strArr[i][0])
// }

//array methods

// const fruitsArr = [
//     "Apple",
//     "Banana",
// ];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// fruitsArr.forEach(function (item, index) {
//     console.log(item, index);
// });

// numbers.forEach(function (num) {
//     console.log(num ** 4);
// });

// //foreach is good for actions on the array elements
// //but NOT for changing the array and getting a new one instead!

// const newNumbersArr = numbers.map(function (num) {
//     return num ** 4;
// });

// console.log(newNumbersArr, numbers);
// // map is working like forEach but returns a value
// // the value is a new array with the modified elements

// const filteredNumbers = numbers.filter(function (item) {
//     return item > 5;
// });

// console.log(filteredNumbers);

// // filter is working like forEach but returns a value
// // that answers true to the specific condition we gave

// const foundNumber = numbers.find(function (item) {
//     return item > 5;
// })

// const foundIndex = numbers.findIndex(function (item) {
//     return item > 5;
// })

// console.log(foundNumber, foundIndex);

// //find is working like filter but stops after
// // the first true statement it finds and returns the item
// //findIndex is doing the exact same thing but return the index of the item

// const arr = ['hello', 'there', 'my', 'name', 'is']

// const s = arr.push('almog')
// const u = arr.unshift('welcome and')
// console.log(arr, s, u)

// //push is a method that inserts an element to the end of the array
// //unshift is a method that inserts an element to the start of the array

// const p = arr.pop()
// const sh = arr.shift()
// console.log(arr, p, sh)

// //pop is a method that removes the last element of the array and returns it
// //shift is a method that removes the first element of the array and returns it

// const fruits2 = ['Apple', 'Banana', 'Orange', 'Orange'];

// const indFruits2 = fruits2.indexOf("Orange")
// const ind2Fruits2 = fruits2.indexOf("an")
// const ind3Fruits2 = fruits2.includes("Orange")
// const ind4Fruits2 = fruits2.includes("an")


// console.log(indFruits2, ind2Fruits2, ind3Fruits2, ind4Fruits2)

// //indexOf, like string, will return the index of the element in the array
// //if nothing will be found then returns -1
// //includes, like string, will return a true statement if the element is in the array
// //if nothing will be found then returns false

// const newNumbers = numbers.slice(3, 7)
// const copyNumbers = numbers.slice()

// console.log(newNumbers, numbers, copyNumbers)

// //slice is a function that lets you get a portion
// //of the array without modifying the array itself

// const notGoodCopyArr = numbers
// console.log(notGoodCopyArr, numbers)

// notGoodCopyArr.push('hello')
// console.log(notGoodCopyArr, numbers)

// // exmaple for a save by reference with arrays - should use slice \ whatever we will learn sooner or later

// const splicedNumbers = numbers.splice(2, 8)

// console.log(splicedNumbers, numbers)

// //splice is a function that lets you get a portion
// //of the array and modifies the array itself

// const firstArr = [1, 2, 3]
// const secondArr = [4, 5, 6]
// const thirdArr = [7, 8, 9]


// const newArr = firstArr.concat(secondArr, thirdArr)

// console.log(newArr)

// //concat literally concatanates array together and returns the new array


// const elements = ['Fire', 'Wind', 'Rain'];

// console.log(elements.join());
// // expected output: Fire,Wind,Rain

// console.log(elements.join(''));
// // expected output: FireWindRain

// console.log(elements.join('-'));
// // expected output: Fire-Wind-Rain

// console.log(elements.join('*'));
// // expected output: Fire*Wind*Rain

// console.log(numbers.join('+'))

// //join turns an array to a string with the specified seperator.

// const date = '22/02/2023:08:45:06'

// const dateWithoutHour = date.split(':')
// console.log(dateWithoutHour[0])

// const splittedDate = dateWithoutHour[0].split('/')
// console.log(splittedDate)

// //split turns a string to an array and divides by the specified seperator.

// console.log(newArr)

// newArr.reverse()

// console.log(newArr)

//   // reverse turns all the items in the array from the end to the beginning
//   // it is mutating the original array


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits)


// function getRandomInt(num1, num2, num3) {
//     num1 = Math.sqrt(4);
//     num2 = Math.sqrt(4);
//     num3 = Math.sqrt(4);
//     // return Math.floor(Math.random() * (max - min + 1)) + min;
//     console.log(num1, num2, num3)
// }

// getRandomInt(2, 3, 4); // 16 (For example)