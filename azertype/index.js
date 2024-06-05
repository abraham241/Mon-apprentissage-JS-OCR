/*let motTapeOk = true // Essayez de mettre false à la place de true

if (motTapeOk) {
    console.log("Bravo, vous avez correctement tapé le mot")
} else {
    console.log("Échec, le mot n'est pas correct")
}

let motUtilisateur = prompt("Entrez un mot :")
console.log(motUtilisateur)*/

// const motApplication = "Bonjour" // Essayez de mettre un autre mot ici !
// let motUtilisateur = prompt("Entrez le mot : " + motApplication)

/*if (motUtilisateur === motApplication) {
    console.log("Bravo !")
} else {
    console.log("Vous avez fait une erreur de frappe.")
}*/

/*switch (motUtilisateur){
    case motApplication:
        console.log("Bravo !")
        break
    case "Gredin":
        console.log("Restez correct !")
        break
    case "Mecréant":
        console.log("Restez correct !")
        break
    case "Vilain":
        console.log("Restez correct !")
        break
    default:
        console.log("Vous avez fait une erreur de frappe.")
}*/

/***************************************************** */
//  ## Utilisation des tableaux pour stoquer des mots

/**************************************************** */
const listMots = ["Cachalot", "Pétunia", "Serviette"]

let score = 0

let motUtilisateur = prompt("Entrez un mot :" + listMots[0])
if (motUtilisateur === listMots[0]) {
    score++
} else {
    console.log("Vous avez fait une erreur de frappe.")
}  

motUtilisateur = prompt("Entrez un mot :" + listMots[1])
if (motUtilisateur === listMots[1]) {
    score++
} else {
    console.log("Vous avez fait une erreur de frappe.")
}

motUtilisateur = prompt("Entrez un mot :" + listMots[2])
if (motUtilisateur === listMots[2]) {
    score++
} 

console.log("Bravo, vous avez gagnez " + score + " points !")