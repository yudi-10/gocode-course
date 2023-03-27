
/*
const temp = parseInt(prompt('what is the temp outside'))

if (temp < 15) {
    alert('Wear warm clothes')
} else if (temp >= 15 && temp < 25) {
    alert('You dont need to wear warm clothes')
} else {
    alert('Run quickly to the air conditioner')
}
*/


const day = prompt('enter todays day')
const hour = parseInt(prompt('what is the hour'))

if ((day === 'Sunday' || day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday') && hour > 9 && hour < 17) {
    alert("Go to work")
} else if (hour >= 17 || hour < 9) {
    alert('Go to sleep')
} else if (day === 'Friday' || day === 'Saturday') {
    alert('Go to the park with the family')
}