let i = 0;
/*la boucle for permet de répéter du code 
lorsque l’on sait d’avance combien de fois il faudra le répéter*/

// for (i=0; i<10; i++){
//     console.log([i])
// }

/* la boucle while permet de répéter du code autant 
de fois jusqu’a ce que la condition soit vraie */

// while (i<10){
//     console.log(i)
//     i++
// }

const listMots = ["Cachalot", "Pétunia", "Serviette"];

const listePhrases = [
  "je vais le chercher",
  "je vais voir mon ami",
  "je vais  louer",
];

let score = 0;

let choix = prompt("veuillez choisir entre: les mots et les phrases");
while (choix !== "mots" && choix !== "phrases") {
  choix = prompt("veuillez choisir entre: les mots et les phrases");
}

if (choix === "mots") {
  for (let i = 0; i < length.listMots; i++) {
    let motUtilisateur = promp("Entrez le mot :" + listMots[i]);
    if (motUtilisateur === listMots[i]) {
      score++;
    }
  }
  console.log("votre score est de: " + score + "sur" + listMots[i])
} 
else(choix === "phrases") {
    for(let i = 0; i < length.listePhrases; i++){
        let motUtilisateur = prompt("Entrez la phrase : " + listePhrases[i]);
        if(motUtilisateur === listePhrases[i]){
            score++;
        }
    }
    console.log("votre score est de: " + score + "sur" + listePhrases[i])
}
