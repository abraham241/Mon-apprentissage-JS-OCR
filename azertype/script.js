// let motUtilisateur = prompt("Entrez un mot :")
// console.log(motUtilisateur)

// execution du probleme avec if 

// const motApplication = "bonjour";
// let motUtilisateur = prompt("Entrez votre mot" + motApplication);

// if (motUtilisateur === motApplication){
//     console.log("Bravo !");
// } else{
//     console.log("vous avez fait une erreur");
// }


// excution du probleme avec switch  

/*switch (motUtilisateur){
    case motApplication:
        console.log("Bravo!")
    break
    case "gredin":
        console.log("restez correct !")
    break
    case "Mécréant":
        console.log("restez correct !")
    break
    case "Vilain":
        console.log("Soyez gentil !")
    break
    default:
        console.log("Vous avez fait une erreur")
}*/


/*let listeMots =['bonjour', 'bonsoir', 'au revoir']
score = 0

let motUtilisateur = prompt('Entrez votre mot' + listeMots[0])

if(motUtilisateur === listeMots[0]){
    score++
}

let motUtilisateur = prompt('Entrez votre mot' + listeMots[1])
if (motUtilisateur === listeMots[1]){
    score++
}

let motUtilisateur = prompt('Entrez votre mot' + listeMots[2])
if (motUtilisateur === listeMots[2]){
    score++
}

console.log("Votre score est de " + score + "sur 3")*/

// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
let score = 0

// Déclaration de la variable contenant le mot saisi par l'utilisateur
// Le prompt sert à afficher une popup demandant à l'utilisateur de saisir un mot
let motUtilisateur = prompt('Entrez le mot : ' + listeMots[0])

// Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
if (motUtilisateur === listeMots[0]) {
    score++
}

// Idem avec le second mot du tableau
// Notez l'absence du "let" devant la déclaration de la variable "motUtilisateur", cela permet de réutiliser la variable déclarée précédemment
motUtilisateur = prompt('Entrez le mot : ' + listeMots[1])
if (motUtilisateur === listeMots[1]) {
    score++
}

// Idem avec le troisième mot du tableau
motUtilisateur = prompt('Entrez le mot : ' + listeMots[2])
if (motUtilisateur === listeMots[2]) {
    score++
}

// Affichage du score de l'utilisateur
console.log("Votre score est de " + score + " sur 3")