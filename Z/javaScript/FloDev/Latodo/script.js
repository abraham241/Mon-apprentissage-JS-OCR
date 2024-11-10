//les selecteurs
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-bouton");
const todoListe = document.querySelector(".todo-liste");
const filterOption = document.querySelector(".filter-todo");

// les ecouteurs
todoButton.addEventListener("click", addTodo);
todoListe.addEventListener("click", deleteCheck);
filterOption.addEventListener("input", filterTodo);
document.addEventListener("DOMContentLoaded", getTodos);
// les fonctions

function addTodo(event) {
  event.preventDefault();
  // création de la div qui contien la tache et les boutons
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //création du li qui contient le texte
  newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");

  //ajout du 'li' dans la div principal
  todoDiv.appendChild(newTodo);
  // ajouter la todo au locale storage
  // j'appele la fonction de sauvegarde du locale storage
  saveLocaleTodos(todoInput.value);

  //on crée les boutons de check et de delet
  //btn de check
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton);

  //btn supression
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //ajouter a notre todo-liste
  todoListe.appendChild(todoDiv);

  // vider la todo
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  if (confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?"))
    if (item.classList[0] === "trash-btn") {
      // delete todo
      const todo = item.parentElement;
      todo.classList.add("fall");
      todo.addEventListener("transitionend", function () {
        todo.remove();
      });
    }
  // check mark
  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

// La fonction qui filtre
function filterTodo(e) {
  const todos = todoListe.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
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
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

// sauvegarde dans le locale storage
function saveLocaleTodos(todo) {
  // Vérifier s'il y a des items existants
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = []; // Utilisez `todos` ici pour initialiser un tableau vide
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo); // Ajouter le nouvel item au tableau
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = []; // Utilisez `todos` ici pour initialiser un tableau vide
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    // création de la div qui contien la tache et les boutons
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //création du li qui contient le texte
    newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");

    //ajout du 'li' dans la div principal
    todoDiv.appendChild(newTodo);

    //on crée les boutons de check et de delet
    //btn de check
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);

    //btn supression
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //ajouter a notre todo-liste
    todoListe.appendChild(todoDiv);
  });
}
