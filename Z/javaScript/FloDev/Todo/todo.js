// je récupere tout les éléments du formulaire dans le html
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

// je crée un écouteur d'événement de soumission pour le
// formulaire afin qu'il puisse empêcher le comportement par défaut de notre application.

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
