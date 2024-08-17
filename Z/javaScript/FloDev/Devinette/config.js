// function devinette() {
//     let nbrDevine = Math.random() * 11; // Génère un nombre aléatoire entre 0 et 11 (non inclus)
//     let nbrArrondi = Math.floor(nbrDevine); // Arrondit vers le bas pour obtenir un entier entre 0 et 10
//     let leNbr;

//     do {
//         leNbr = prompt("Devine le nombre"); // Demande à l'utilisateur de deviner le nombre
//         leNbr = parseInt(leNbr, 10); // Convertit la chaîne entrée par l'utilisateur en nombre entier en base 10
//         console.log(leNbr, nbrArrondi); // Affiche la valeur devinée et le nombre à deviner pour le débogage
//         if (nbrArrondi > leNbr) {
//             console.log("C'est trop petit");
//         } else if (nbrArrondi < leNbr) {
//             console.log("C'est trop grand");
//         }
//     } while (leNbr !== nbrArrondi); // Répète la boucle jusqu'à ce que l'utilisateur devine correctement

//     console.log("Bravo, vous avez deviné le nombre!");
// }

// devinette();

// Écrivez un programme JavaScript où l'utilisateur doit deviner un nombre compris entre 1 et 100. Le programme doit donner des indices à l'utilisateur ("trop grand" ou "trop petit") jusqu'à ce qu'il devine le bon nombre.
// Instructions :
// Générez un nombre aléatoire entre 1 et 100.
// Demandez à l'utilisateur de deviner le nombre.
// Indiquez si le nombre deviné est trop grand ou trop petit.
// Répétez jusqu'à ce que l'utilisateur devine le bon nombre.
// Affichez le nombre de tentatives nécessaires.
// ===============correction====================

// let numberToGuess = Math.floor(Math.random() * 100) + 1;
// let guess;
// let attempts = 3;

// while (attempts > 0) {
//   guess = parseInt(prompt("Devinez le nombre entre 1 et 100 :"));

//   if (guess > numberToGuess) {
//     console.log("Trop grand !" + numberToGuess);
//   } else if (guess < numberToGuess) {
//     console.log("Trop petit !" + numberToGuess);
//   } else {
//     console.log(
//       "Félicitations ! Vous avez deviné le nombre en " +
//         attempts + // 4 - attempts gives the number of attempts used
//         " tentatives."
//     );
//     break; // Sort de la boucle une fois que le nombre a été deviné
//   }

//   attempts--; // Diminue le nombre de tentatives restantes

//   if (attempts === 0) {
//     console.log(
//       "Désolé, vous avez épuisé toutes vos tentatives. Le nombre était " +
//         numberToGuess +
//         "."
//     );
//   }
// }

// function guessTheNumber(maxAttempts = 3)
// function guessTheNumber() {
//   const numberToGuess = Math.floor(Math.random() * 100) + 1;
//   let guess;
//   let attempts = 3;
//   //   let attempts = maxAttempts;

//   while (attempts > 0) {
//     guess = parseInt(prompt("Devinez le nombre entre 1 et 100 :"));

//     if (guess > numberToGuess) {
//       console.log("Trop grand !");
//     } else if (guess < numberToGuess) {
//       console.log("Trop petit !");
//     } else {
//       console.log(
//         "Félicitations ! Vous avez deviné le nombre en " +
//           (maxAttempts - attempts + 1) + // Calcule le nombre de tentatives utilisées
//           " tentatives."
//       );
//       return; // Sort de la fonction une fois que le nombre a été deviné
//     }

//     attempts--; // Diminue le nombre de tentatives restantes

//     if (attempts === 0) {
//       console.log(
//         "Désolé, vous avez épuisé toutes vos tentatives. Le nombre était " +
//           numberToGuess +
//           "."
//       );
//     }
//   }
// }

// // Appeler la fonction pour commencer le jeu
// // guessTheNumber(3);
// guessTheNumber();

// Demandez à l'utilisateur de saisir un mot.
// Vérifiez si le mot est un palindrome.
// Affichez un message indiquant si le mot est un palindrome ou non.
// =================correction==================

let word = prompt("Entrez un mot :");
let reversedWord = word.split("").reverse().join("");

if (word === reversedWord) {
  console.log(word + " est un palindrome.");
} else {
  console.log(word + " n'est pas un palindrome.");
}

// let word;

// function isPalindrome() {
//   word = prompt("Entrez un mot :");
//   let reversedWord = word.split("").reverse().join("");

//   if (word === reversedWord) {
//     console.log(word + " est un palindrome.");
//   } else {
//     console.log(word + " n'est pas un palindrome.");
//   }
// }

// // Appel de la fonction avec un mot saisi par l'utilisateur

// isPalindrome(word);

// function fizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// // Appel de la fonction pour exécuter le programme
// fizzBuzz();

// Utilisez une boucle pour parcourir les nombres de 1 à 100.
// Pour chaque nombre, vérifiez s'il est multiple de 3, de 5 ou des deux.
// Affichez "Fizz", "Buzz" ou "FizzBuzz" en conséquence.
