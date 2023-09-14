const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const toDos = [];

function saveTodos() {
    localStorage.setItem("todos" , JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click" , deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);  
}

function todoSubmit(event) {
    event.preventDefault();
    // newTodo에 변수값 복사해놓기  
    const newTodo = todoInput.value; 
    todoInput.value = "";
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
}

todoForm.addEventListener("submit", todoSubmit)