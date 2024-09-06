// // selection du bouton
// const button = document.querySelector('#submit')
// // selection de la liste des items
// const todoList = document.querySelector('#todo-list')
// // selection des items
// const lesitems = todoList.children
// // je selectione le paragraphe
// const todoNr = document.querySelector('.nrTodo b')

// // attacher un evenement a ce bouton
// button.addEventListener("click", function (){
//     // je crée l'élément que le bouton doit créer
//     const newItem = document.createElement('li');
//     // je donne une classe a cette evenement (facultative)
//     newItem.classList.add('item')
//     // je crée le text que je dois mettre dans cette élement
//     const newText = document.createTextNode(`item ${lesitems.length + 1}`);
//     newItem.appendChild(newText);
//     // j'ajoute l'élément créer a la todoList (de façon plus générale au DOM)
//     todoList.appendChild(newItem);
//     // todoNr.innerText = lesitems.length
// })

let numberToGuess = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

while (guess !== numberToGuess) {
  guess = parseInt(prompt("Devinez le nombre entre 1 et 100 :"));
  attempts++;

  if (guess > numberToGuess) {
    console.log("Trop grand !");
  } else if (guess < numberToGuess) {
    console.log("Trop petit !");
  } else {
    console.log(
      "Félicitations ! Vous avez deviné le nombre en " +
        attempts +
        " tentatives."
    );
    break; // Sort de la boucle une fois que le nombre a été deviné
  }
}
