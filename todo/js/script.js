// addTodo checks if item is empty or not, makes a new todo object, ppushes it into the const array, renders the ietm to the screen, clear input box after rendering
function addTodo(item) {
    if (item != '') { //make an object
        const todo = {
            id: Date.now(),
            name: item,
            completed: false
        }
        todos.push(todo) //add it to the array i.e. const todo = {}
        renderTodos(todos) 
        todoInput.value = '' //clear the input box
    }
}
/*  */
function renderTodos(todos) {
    todoItemsList.innerHTML = ''
    todos.forEach(function(item) {
        const checked = item.completed ? 'checked' : null;

        // make a li element and fill it
        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        li.setAttribute('data-key', item.id);
        if (item.completed === true) {
            li.classList.add('checked');
        }
        li.innerHTML = `
        <input type="checkbox" class="checkbox" ${checked}>
${item.name}
      <button class="delete-button">X</button>
    `;
    todoItemsList.append(li) //adds li to ul
    })
}
function addToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos)); // stringify is to convert todos array into a string
    renderTodos(todos) // to render the changes to the screen
}

function getFromLocalStorage() {
    localStorage.getItem('todos', JSON.stringify(todos)); // stringify is to convert todos array into a string
    getTodos(todos)
}

// function toggle(id)
// function deleteTodo(id)


const todoForm = document.querySelector('.todo-form')
const todoInput = document.querySelector('.todo-input');
const todoItemsList = document.querySelector('.todo-items')

//make an array to store the list
let todos = []


todoForm.addEventListener('submit', function(event) {
    event.preventDefault()
    addTodo(todoInput.value)
})