// Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Functions
function addTodo(event) {
    // Prevent form from submiiting
    event.preventDefault();

    // Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create List (li)
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // this put the newTodo inside todoDiv

    // Check Mark Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Check Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fa-solid fa-circle-minus"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append To List
    todoList.appendChild(todoDiv);

    // Clear todoInput value
    todoInput.value = "";
}

// Delete Check Function
function deleteCheck(event) {
    const item = event.target;
    // Delete todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        // Delete Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function() {
          todo.remove();  
        }); 
    }
    // Check Mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(event.target.value) {
            case "all":
                todo.style.display ='flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}