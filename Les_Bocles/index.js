// let i = 0;
// /*la boucle for permet de répéter du code
// lorsque l’on sait d’avance combien de fois il faudra le répéter*/

// // for (i=0; i<10; i++){
// //     console.log([i])
// // }

// /* la boucle while permet de répéter du code autant
// de fois jusqu’a ce que la condition soit vraie */

// // while (i<10){
// //     console.log(i)
// //     i++
// // }

// /*const listMots = ["Cachalot", "Pétunia", "Serviette"];

// const listePhrases = [
//   "je vais le chercher",
//   "je vais voir mon ami",
//   "je vais  louer",
// ];

// let score = 0;

// let choix = prompt("veuillez choisir entre: les mots et les phrases");
// while (choix !== "mots" && choix !== "phrases") {
//   choix = prompt("veuillez choisir entre: les mots et les phrases");
// }

// if (choix === "mots") {
//   for (let i = 0; i < length.listMots; i++) {
//     let motUtilisateur = promp("Entrez le mot :" + listMots[i]);
//     if (motUtilisateur === listMots[i]) {
//       score++;
//     }
//   }
//   console.log("votre score est de: " + score + "sur" + listMots[i])
// }
// else (choix === "phrases") {
//     for(let i = 0; i < length.listePhrases; i++){
//         let motUtilisateur = prompt("Entrez la phrase : " + listePhrases[i]);
//         if(motUtilisateur === listePhrases[i]){
//             score++;
//         }
//     }
//     console.log("votre score est de: " + score + "sur" + listePhrases[i])
// }*/

// let texte = document.getElementById("texte");
// console.log(texte);

// let numberToGuess = Math.floor(Math.random() * 100) + 1;
// let guess;
// let attempts = 0;

// while (guess !== numberToGuess) {
//   guess = parseInt(prompt("Devinez le nombre entre 1 et 100 :"));
//   attempts++;

//   if (guess > numberToGuess) {
//     console.log("Trop grand !");
//   } else if (guess < numberToGuess) {
//     console.log("Trop petit !");
//   } else {
//     console.log(
//       "Félicitations ! Vous avez deviné le nombre en " +
//         attempts +
//         " tentatives."
//     );
//     break; // Sort de la boucle une fois que le nombre a été deviné
//   }
// }

// let num1 = parseInt(prompt("Entrez le premier nombre :"));
// let num2 = parseInt(prompt("Entrez le deuxième nombre :"));
// let operation = prompt("Choisissez une opération (+, -, *, /) :");

// let result;
// if (operation === "+") {
//   result = num1 + num2;
// } else if (operation === "-") {
//   result = num1 - num2;
// } else if (operation === "*") {
//   result = num1 * num2;
// } else if (operation === "/") {
//   result = num1 / num2;
// } else {
//   result = "Opération non valide";
// }

// console.log("Le résultat est : " + result);

function calculate() {
  let num1 = parseInt(prompt("Entrez le premier nombre :"));
  let num2 = parseInt(prompt("Entrez le deuxième nombre :"));
  let operation = prompt("Choisissez une opération (+, -, *, /) :");

  // Vérifier si les entrées sont des nombres valides
  if (num1 !== String || num2 !== String) {
    console.log("Erreur : Veuillez entrer des nombres valides.");
    return; // Sortir de la fonction si l'un des entrées n'est pas un nombre
  }

  let result;

  // Effectuer l'opération en fonction de l'entrée de l'utilisateur
  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    if (num2 !== 0) {
      // Vérifier la division par zéro
      result = num1 / num2;
    } else {
      result = "Erreur : Division par zéro";
    }
  } else {
    result = "Opération non valide";
  }

  // Afficher le résultat
  console.log("Le résultat est : " + result);
}

// Appel de la fonction pour exécuter le programme
calculate();
