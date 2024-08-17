// recuperation des elements Html via les sélecteus
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoListe = document.querySelector(".todo-liste");

// LES ECOUTEURS D'EVENEMENT
todoButton.addEventListener("click", addTodo);
todoListe.addEventListener("click", deleteCheck);

//Les fonction
function addTodo(event) {
  event.preventDefault();
  // Créer une todoDiv
  // pour creer un élément on fait une d'abord une const/Var
  const todoDiv = document.createElement("div");
  // on ajoute une classe a cette element
  todoDiv.classList.add("todo");
  // on creer la liste qui sera a l'interieur de la div sus mentionée
  // pour creer un élément on fait une const/Var
  const nweTodo = document.createElement("li");
  // puis on lui rajoute du texte dans le "li"41456928
  nweTodo.innerText = todoInput.value;
  // On ajoute une classe au li (nweTodo)
  nweTodo.classList.add("todo-item");
  // On ajoute le li dans la div todoDiv
  todoDiv.appendChild(nweTodo);
  // On donne un padding a la nweTodo
  nweTodo.style.padding = "5px";
  // nweTodo.style.background = "blue";

  // On crée les bouton de suppression et de modification
  const completedButton = document.createElement("button");
  // On ajoute du texte dans le bouton (icone de modif)
  completedButton.innerHTML = `<i class="fa-solid fa-pen" style="color: blue; padding: 10px; border-radius: 5px; cursor: pointer;"></i>`;
  //on donne une classe a ce bouton
  completedButton.classList.add("completed-btn");
  // On ajoute le bouton dans la div
  todoDiv.appendChild(completedButton);

  // On fait la meme chose avec le bouton de suppréssion
  const trashButton = document.createElement("button");
  trashButton.innerHTML =
    '<i class="fa-solid fa-trash" style="color: red; padding: 5px; border-radius: 5px; cursor: pointer;"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //
  todoDiv.style.display = "flex";
  todoDiv.style.justifyContent = "space-between";
  todoDiv.style.background = "white";
  todoDiv.style.padding = "10px";
  todoDiv.style.width = "400px";
  trashButton.style.pointerEvents = "none";
  completedButton.style.textDdecoration = "line-through";

  // nous allons ajouter cette div qui contient les li a notre div
  todoListe.appendChild(todoDiv);
  todoInput.value = "";
}
[];

// /////////////////////////////////////////////////////////////////////

// la function pour delet les élements créér
function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  // la check marque
  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
