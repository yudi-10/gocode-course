// const searchBox = document.querySelector('#search-box');
// const items = ['apple', 'banana', 'cherry', 'date'];

// searchBox.addEventListener('keyup', function (event) {
//     const searchTerm = event.target.value.toLowerCase()
//     const matchingltems = items.filter(function (item) {
//         return item.includes(searchTerm)
//     })
//     const resultsContainer = document.querySelector('#searchResults')

//     resultsContainer.innerHTML = matchingltems.join('<br>')
// })

const input = document.querySelector('input[type="text"]')
const results = document.getElementById('results')

const data = ['ארצות הברית', 'אפריקה', 'סין', 'דרום אמריקה', 'גרמניה', 'בריטניה', 'צרפת']

input.addEventListener('input', function () {
    const val = this.value
    let matches = data.filter(function (word) {
        return word.includes(val)
    });
    results.innerHTML = ""

    if (matches.length === 0) {
        const li = document.createElement('li')
        li.innerHTML = 'לא נמצאו תוצאות'
        results.appendChild(li)
    } else
        matches.forEach(function (matche) {
            const li = document.createElement('li')
            li.innerHTML = matche
            results.appendChild(li)
        })
})