let moi = {
    nom : "NYOUNDOU",
    prenom: "Abraham",
    Age: 27,

    identité : function (){
       return this.nom +
              this.prenom +
              this.Age
    }
}

// alert (moi.identité())

let primitive = "je suis une primitive"
let longueur = primitive.length
// met une chaine de caractère en majistcul
let maj = primitive.toUpperCase()

console.log(maj)
console.log(longueur)

// transforme un number en chaine de caractaire
let x = 10 
let y = x.toString()

console.log(y)