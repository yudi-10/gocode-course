
const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    const list = document.createElement('ul');

    todos.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.textContent = `${todo.id} ${todo.title}`;
        if (todo.completed) {
            listItem.style.textDecoration = 'line-through';
        }
        list.appendChild(listItem);
    });
    document.body.appendChild(list);
}

fetchTodos();

const fetchUsers = async () => {
    const response = await fetch('https://reqres.in/api/users');
    const { data: users } = await response.json();
    const list = document.createElement('ul');


    users.forEach(user => {
        console.log(response);
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <div class="card">
          <img src="${user.avatar}" alt="Avatar" class="avatar">
          <div class="info">
            <h2>${user.first_name} ${user.last_name}</h2>
            <p>${user.email}</p>
          </div>
        </div>
      `;
        list.appendChild(listItem);
    });
    document.body.appendChild(list);
}

fetchUsers();






const breedsSelect = document.getElementById("breeds");
const catImageContainer = document.getElementById("cat-image-container");

fetch("https://api.thecatapi.com/v1/breeds")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((breed) => {
            const option = document.createElement("option");
            option.value = breed.id;
            option.textContent = breed.name;
            breedsSelect.appendChild(option);
        });
    })
    .catch((error) => console.error(error));

breedsSelect.addEventListener("change", (event) => {
    const breedId = event.target.value;

    fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    )
        .then((response) => response.json())
        .then((data) => {
            const imageUrl = data[0].url;
            const image = document.createElement("img");
            image.src = imageUrl;
            catImageContainer.innerHTML = "";
            catImageContainer.appendChild(image);
        })
        .catch((error) => console.error(error));
});
