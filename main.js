const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", CompleteTodo);
filterOption.addEventListener("change", filterTodo);
document.addEventListener("DOMContentLoaded", saveTodos);

// Add edit functionality
todoList.addEventListener("dblclick", startEdit);

function addTodo(event) {
    event.preventDefault()
    
    // Validate input
    if (todoInput.value.trim() === "") {
        alert("Please enter a todo item");
        return;
    }

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;

    saveLocalTodo(todoInput.value);

    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";

    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
}

function CompleteTodo(event) {
    const item = event.target;
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        removeLocalTodo(todo);
        todo.remove();
    }
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        updateLocalTodo(todo);
    }
}

function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach((todo)=>{
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "none";
                } else {
                    todo.style.display = "flex";
                }
                break;
        }
    })
}

function saveLocalTodo(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push({ text: todo, completed: false });
    localStorage.setItem("todos", JSON.stringify(todos))
}

function removeLocalTodo(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    };
    const todoText = todo.children[0].innerText;
    todos = todos.filter(todoItem => todoItem.text !== todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function updateLocalTodo(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    };
    const todoText = todo.children[0].innerText;
    const todoIndex = todos.findIndex(todoItem => todoItem.text === todoText);
    if (todoIndex !== -1) {
        todos[todoIndex].completed = todo.classList.contains("completed");
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}

function startEdit(event) {
    const todo = event.target.closest(".todo");
    if (!todo || event.target.classList.contains("complete-btn") || event.target.classList.contains("trash-btn")) {
        return;
    }
    
    const todoItem = todo.querySelector(".todo-item");
    const currentText = todoItem.innerText;
    
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    input.className = "edit-input";
    
    input.style.width = "100%";
    input.style.padding = "0.5rem";
    input.style.border = "2px solid #c4447a";
    input.style.borderRadius = "5px";
    input.style.fontSize = "1.5rem";
    
    todoItem.replaceWith(input);
    input.focus();
    input.select();
    
    function saveEdit() {
        const newText = input.value.trim();
        if (newText === "") {
            todo.remove();
            removeLocalTodo(todo);
        } else {
            const newTodoItem = document.createElement("li");
            newTodoItem.innerText = newText;
            newTodoItem.className = "todo-item";
            input.replaceWith(newTodoItem);
            
            // Update localStorage
            updateTodoText(todo, currentText, newText);
        }
    }
    
    input.addEventListener("blur", saveEdit);
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            saveEdit();
        }
    });
}

function updateTodoText(todoElement, oldText, newText) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    
    const todoIndex = todos.findIndex(todoItem => todoItem.text === oldText);
    if (todoIndex !== -1) {
        todos[todoIndex].text = newText;
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}

function saveTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    };
    todos.forEach(function (todoItem) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        
        if (todoItem.completed) {
            todoDiv.classList.add("completed");
        }

        const newTodo = document.createElement("li");
        newTodo.innerText = todoItem.text;

        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        const completedButton = document.createElement("button");
        completedButton.innerHTML = "<i class='fas fa-check'></i>";
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        const trashButton = document.createElement("button");
        trashButton.innerHTML = "<i class='fas fa-trash'></i>";
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv)
    })
}