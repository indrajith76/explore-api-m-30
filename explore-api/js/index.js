function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/usersxx')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

function displayUsers2(data){
    const ul = document.getElementById('users-list');
    for (const user of data) {
        let li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}