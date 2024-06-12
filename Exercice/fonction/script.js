/*let nbre1 = prompt("Entrez le premier nombre")
let nbre2 = prompt("Entrez le deuxiéme nombre")
let operation = prompt("Entrez l'operation +,-,*,/")

// nbre1 = parseInt(nbre1)
// nbre2 = parseInt(nbre2)

let resultat = calculer(nbre1, nbre2, operation)

console.log(resultat)   

function calculer(nbre1, nbre2, operation) {
    switch (operation) {
        case "+":
            return parseInt(nbre1) + parseInt(nbre2)
        case "-":
            return parseInt(nbre1) - parseInt(nbre2)
        case "*":
            return parseInt(nbre1) * parseInt(nbre2)
        case "/":
            return parseInt(nbre1) / parseInt(nbre2)
    }
}*/


let nbreDevine = (Math.rendom()* 100) + 1
let devine 
let tentatives = 0


while (devine !== nbreDevine) {
    devine = (prompt("Devine le nombre entre 1 et 100")) 
    tentatives++
}   

if (devine < nbreDevine) {
    console.log("Trop petit")
} else if (devine > nbreDevine) {
    console.log("Trop grand")
} else {
    console.log("Bravo, vous avez devine le nombre en " + tentatives + " tentatives")
}




