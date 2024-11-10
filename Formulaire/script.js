document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupère les valeurs des autres champs
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const checkbox = document.getElementById("checkbox").checked;
    const select = document.querySelector("select").value;
    const message = document.getElementById("message").value;

    // Récupère tous les boutons radio avec querySelectorAll
    const radios = document.querySelectorAll('input[name="couleur"]');
    let couleurChoisie = "";

    // Parcours les radios pour trouver celle qui est cochée
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        couleurChoisie = radios[i].value;
        break; // On peut arrêter la boucle dès qu'on a trouvé la sélection
      }
    }

    // Affiche les valeurs dans la console
    console.log("Nom:", nom);
    console.log("Email:", email);
    console.log("Préférence de couleur:", couleurChoisie);
    console.log("Checkbox:", checkbox ? "Coché" : "Non coché");
    console.log("Choix dans le select:", select);
    console.log("Message:", message);
  });
});
