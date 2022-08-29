fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(data => loadTodos(data))

function loadTodos(todos){
    const todosContainer = document.getElementById('todos-container');
    for (const todo of todos) {
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
            <h5>ID : ${todo.id}</h5>
            <h3>Title : ${todo.title}</h3>
            <h3>IsComplete : ${todo.completed === true ? 'Completed ✅' : 'Not Completed ❌'}</h3>
        `
        todosContainer.appendChild(todoDiv)
    }
}

loadTodos()