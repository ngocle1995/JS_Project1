const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const todoInput = document.getElementById("input");
const todoButton = document.querySelector(".todo-button");

<<<<<<< HEAD
//Identify variable
let todos = [];
=======
//Identify storage
let todos = JSON.parse(localStorage.getItem("todos"));
>>>>>>> ead79138a5a801d146e6e09cbad3e596d07752e5

//Event listeners
todoButton.addEventListener("click", addTodo);
list.addEventListener("click",deleteCheck);
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

// Show todays date
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

function init() {
  // Show list from localStorage
  for(let i = 0; i < todos.length; i++) {
    appendTaskToList(todos[i])
  }
}

//Add task
function addTodo (event) {
    event.preventDefault();
    document.getElementById("input").style.border = '';
    document.getElementById("input").style.color = '';

    let task = todoInput.value;

    if(task.length > 2 && task.length < 23){
<<<<<<< HEAD
        appendTaskToList(task)
        todos.push(task);
        
=======
      // Code here is cut to appendTaskToList function (used here and line 27)
      appendTaskToList(task)
>>>>>>> ead79138a5a801d146e6e09cbad3e596d07752e5
    } else {
        document.getElementById("input").style.border = "2px solid red";
        document.getElementById("input").style.color = "#EF0000";
        alert("Input need more then 2 characters and less than 23 characters");
    }
    saveLocalTodo(todos);
    todoInput.value= '';    
}

//Check & delete task
function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] === 'trash-btn'){
    const todo = item.parentElement;
    todo.remove();
    }

//Check and categorized the input
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

//Local Storage save
function saveLocalTodo(todos){
<<<<<<< HEAD
    
    console.log(todos);

    localStorage.setItem("todos", JSON.stringify(todos));

    if(localStorage.getItem("todos") === 'undefined'){
        console.log("too is undefined");
=======
    console.log(todos)
    if(localStorage.getItem("todos") === null){
        console.log("too is null")
>>>>>>> ead79138a5a801d146e6e09cbad3e596d07752e5
        todos = [];
    }
<<<<<<< HEAD
}
//Create div for tasks
function appendTaskToList(task) {
    const todoDiv = document.createElement("todo");
    todoDiv.classList.add("todo");
  
//Categorized input
    const newTodo = document.createElement('li');
  
 // replace todoInput.value with parameter task
    newTodo.innerText = task;
  
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
  
//Complete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
  
//Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
  
    list.appendChild(todoDiv);
  }

  
=======
    // Else is removed and added to line 8
    localStorage.setItem("todos", JSON.stringify(todos));
}

function appendTaskToList(task) {
  //Create div for tasks
  const todoDiv = document.createElement("todo");
  todoDiv.classList.add("todo");
>>>>>>> ead79138a5a801d146e6e09cbad3e596d07752e5

  //Categorized input
  const newTodo = document.createElement('li');

  // replace todoInput.value with parameter task
  newTodo.innerText = task;

  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  //Complete button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>'
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>'
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  list.appendChild(todoDiv);
}

// init is call when page loaded
init()