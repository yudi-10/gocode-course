let todoList = [];

const inputField = document.getElementById('todo-item');
const addTodoBtn = document.getElementById('add-todo-item');
const todoItems = document.getElementById('todo-list');

const themeToggleBtn = document.getElementById('toggle-theme');
const showDoneBtn = document.getElementById('show-done')
const showAllBtn = document.getElementById('show-all')

// function addTodo() {
//     const newTodo = inputField.value.trim();
//     if (newTodo !== " ") {
//         todoList = [...todoList, newTodo];
//         const newTodoItem = document.createElement('li');
//         newTodoItem.innerText = newTodo;
//         const deleteButton = document.createElement('button')
//         deleteButton.innerText = 'מחיקה'
//         deleteButton.addEventListener('click', () => deleteTodoItem(newTodo))
//         newTodoItem.appendChild(deleteButton)
//         todoItems.appendChild(newTodoItem)
//         inputField.value = " "
//     }
// }

function addTodo() {
    const newTodo = inputField.value.trim();
    if (newTodo !== " ") {
        todoList = [...todoList, newTodo];
        const newTodoItem = document.createElement('li');
        newTodoItem.innerText = newTodo;

        newTodoItem.addEventListener('click', () => {
            newTodoItem.classList.toggle('done')
        })
        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'מחיקה'
        deleteButton.addEventListener('click', () => deleteTodoItem(newTodo))

        newTodoItem.appendChild(deleteButton)
        todoItems.appendChild(newTodoItem)
        inputField.value = " "
    }
}

function deleteTodoItem(todo) {
    todoList = todoList.filter(item => item !== todo)
    Array.from(todoItems.children)
        .filter(item => item.innerText.includes(todo))
        .forEach(item => item.remove())
}




function toggleTheme() {
    document.documentElement.classList.toggle('dark-mode')
}

function showDoneTodos() {
    Array.from(todoItems.children)
        .filter(item => !item.classList.contains('done'))
        .forEach(item => item.classList.add('hidden'))

    showDoneBtn.classList.add('active')
    showAllBtn.classList.remove('active')
}

function showAllTodos() {
    Array.from(todoItems.children)
        .forEach(item => item.classList.remove('hidden'))

    showAllBtn.classList.add('active')
    showDoneBtn.classList.remove('active')
}

addTodoBtn.addEventListener('click', addTodo)
inputField.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        addTodo()
    }
})

themeToggleBtn.addEventListener('click', toggleTheme)
showDoneBtn.addEventListener('click', showDoneTodos)
showAllBtn.addEventListener('click', showAllTodos)

// addTodoBtn.addEventListener('click', addTodo)
// inputField.addEventListener('keyup', (e) => {
//     if (e.key === 'Enter') {
//         addTodo()
//     }
// })

