Exercice 1 : Calculatrice simple
Écrivez un programme JavaScript qui demande à l'utilisateur de saisir deux nombres et une opération (addition, soustraction, multiplication, division). Le programme doit ensuite effectuer l'opération et afficher le résultat.

Instructions :

Demandez à l'utilisateur de saisir le premier nombre.
Demandez à l'utilisateur de saisir le deuxième nombre.
Demandez à l'utilisateur de choisir une opération parmi +, -, *, /.
Effectuez l'opération choisie sur les deux nombres.
Affichez le résultat.


<!-- let num1 = parseFloat(prompt("Entrez le premier nombre :"));
let num2 = parseFloat(prompt("Entrez le deuxième nombre :"));
let operation = prompt("Choisissez une opération (+, -, *, /) :");

let result;
if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num1 / num2;
} else {
    result = "Opération non valide";
}

console.log("Le résultat est : " + result);
 -->


 Exercice 2 : Deviner le nombre
Écrivez un programme JavaScript où l'utilisateur doit deviner un nombre compris entre 1 et 100. Le programme doit donner des indices à l'utilisateur ("trop grand" ou "trop petit") jusqu'à ce qu'il devine le bon nombre.

Instructions :

Générez un nombre aléatoire entre 1 et 100.
Demandez à l'utilisateur de deviner le nombre.
Indiquez si le nombre deviné est trop grand ou trop petit.
Répétez jusqu'à ce que l'utilisateur devine le bon nombre.
Affichez le nombre de tentatives nécessaires.


<!-- let numberToGuess = Math.floor(Math.random() * 100) + 1;
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
        console.log("Félicitations ! Vous avez deviné le nombre en " + attempts + " tentatives.");
    }
}
 -->

 Exercice 3 : Palindrome
Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un mot et vérifie si ce mot est un palindrome (c'est-à-dire qu'il se lit de la même façon à l'endroit et à l'envers).

Instructions :

Demandez à l'utilisateur de saisir un mot.
Vérifiez si le mot est un palindrome.
Affichez un message indiquant si le mot est un palindrome ou non.


<!-- let word = prompt("Entrez un mot :");
let reversedWord = word.split('').reverse().join('');

if (word === reversedWord) {
    console.log(word + " est un palindrome.");
} else {
    console.log(word + " n'est pas un palindrome.");
}
 -->


Exercice 4 : Compteur de voyelles
Écrivez un programme JavaScript qui demande à l'utilisateur de saisir une phrase et compte le nombre de voyelles dans cette phrase.

Instructions :

Demandez à l'utilisateur de saisir une phrase.
Comptez le nombre de voyelles (a, e, i, o, u) dans la phrase.
Affichez le nombre de voyelles.

<!-- let phrase = prompt("Entrez une phrase :");
let voyelles = 'aeiouAEIOU';
let count = 0;

for (let char of phrase) {
    if (voyelles.includes(char)) {
        count++;
    }
}

console.log("Le nombre de voyelles dans la phrase est : " + count);
 -->

 Exercice 5 : FizzBuzz
Écrivez un programme JavaScript qui affiche les nombres de 1 à 100. Pour les multiples de 3, affichez "Fizz" au lieu du nombre et pour les multiples de 5, affichez "Buzz". Pour les nombres qui sont des multiples de 3 et de 5, affichez "FizzBuzz".

Instructions :

Utilisez une boucle pour parcourir les nombres de 1 à 100.
Pour chaque nombre, vérifiez s'il est multiple de 3, de 5 ou des deux.
Affichez "Fizz", "Buzz" ou "FizzBuzz" en conséquence.

<!-- for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
 -->