const prenons = ["pierre", "ana", "brayan", "issa"]
// let p = ""
console.log(prenons)
// modifier une valeur specifique dans un tableau
prenons[0] = 'paul'

// connaitre la taille du tableau
console.log(prenons.length)

// autre methode pour ajouter un élément dans un tableu
prenons[prenons.length] = "july"
prenons[prenons.length] = "dana"

console.log(prenons)

// la boucle for nous permet de parcourire un tableau
for (let i = 0; i < prenons.length; i++ ){
   let p = prenons[i] + '\n'
   console.log(p)
}

// pour ajouter un élément a n'importe quel endroit du tableau

