let nomsimple = document.getElementById("nom")
let Email = document.getElementById("email")
let check = document.getElementById("checkbox")
let bouton = document.getElementById("btnEnvoyerMail")

// let baliseCouleur = document.querySelectorAll('input[name="couleur"]')
// let couleur = ""
// for (let i = 0; i < baliseCouleur.length; i++) {
//     if (baliseCouleur[i].checked) {
//         couleur = baliseCouleur[i].value
//         break
//     }
// }
// console.log(couleur)

nomsimple = nomsimple.value

nomsimple = nomsimple.addEventListener("change", function (event) {
    event.preventDefault()
    nomsimple = nomsimple.value
    console.log(nomsimple)
})

Email = Email.value

console.log(nom.value, Email.value)

check = check.checked
console.log(check.checked)


// var personne = {
//     nom: ["Jean", "Martin"],
//     age: 32,
//     sexe: "masculin",
//     interets: ["musique", "skier"],
//     bio: function () {
//       alert(
//         this.nom[0] +
//           " " +
//           this.nom[1] +
//           " a " +
//           this.age +
//           " ans. Il aime " +
//           this.interets[0] +
//           " et " +
//           this.interets[1] +
//           ".",
//       );
//     },
//     salutation: function () {
//       alert("Bonjour ! Je suis " + this.nom[0] + ".");
//     },
//   };

//   console.log(personne.bio())