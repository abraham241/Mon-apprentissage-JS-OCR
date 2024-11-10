document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    // Validation du nom
    const nom = document.getElementById("nom");
    const errorNom = document.getElementById("errorNom");
    if (nom.value.trim().length < 2) {
      errorNom.classList.remove("hidden");
      isValid = false;
    } else {
      errorNom.classList.add("hidden");
    }

    // Validation de l'email
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");
    if (!email.checkValidity()) {
      errorEmail.classList.remove("hidden");
      isValid = false;
    } else {
      errorEmail.classList.add("hidden");
    }

    // Validation de la couleur
    const couleur = document.querySelector('input[name="couleur"]:checked');
    const errorCouleur = document.getElementById("errorCouleur");
    if (!couleur) {
      errorCouleur.classList.remove("hidden");
      isValid = false;
    } else {
      errorCouleur.classList.add("hidden");
    }

    // Validation de la checkbox
    const checkbox = document.getElementById("checkbox");
    const errorCheckbox = document.getElementById("errorCheckbox");
    if (!checkbox.checked) {
      errorCheckbox.classList.remove("hidden");
      isValid = false;
    } else {
      errorCheckbox.classList.add("hidden");
    }

    // Validation du select
    const select = document.getElementById("select");
    const errorSelect = document.getElementById("errorSelect");
    if (select.value === "") {
      errorSelect.classList.remove("hidden");
      isValid = false;
    } else {
      errorSelect.classList.add("hidden");
    }

    // Validation du message
    const message = document.getElementById("message");
    const errorMessage = document.getElementById("errorMessage");
    if (message.value.trim().length < 10) {
      errorMessage.classList.remove("hidden");
      isValid = false;
    } else {
      errorMessage.classList.add("hidden");
    }

    // Si tout est valide, on peut soumettre
    if (isValid) {
      alert("Formulaire envoyé avec succès !");
      form.submit();
    }
  });
});
