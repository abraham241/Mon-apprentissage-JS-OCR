// je récupere tout les éléments du formulaire dans le html
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

// je crée un écouteur d'événement de soumission pour le
// formulaire afin qu'il puisse empêcher le comportement par défaut de notre application.

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("button clicked");

  formValidation();

  acceptData();
});

// le scrit de validation du formulaire

let formValidation = () => {
  if (input.value === "") {
    msg.innerText = "votre tache est vise";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
  }
};

let data = {};

let acceptData = () => {
  data.text = input.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
  `;
  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
