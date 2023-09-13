const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function todoSubmit(event) {
    event.preventDefault();
    // newTodo에 변수값 복사해놓기  
    const newTodo = todoInput.value; 
    todoInput.value = "";
}

todoForm.addEventListener("submit", todoSubmit)