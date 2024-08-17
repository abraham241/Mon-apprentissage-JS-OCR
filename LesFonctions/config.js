// const listMots = ["Cachalot", "Pétunia", "Serviette"];

// const listePhrases = [
//   "je vais le chercher",
//   "je vais voir mon ami",
//   "je vais  louer",
// ];


let phrase = prompt("Entrez une phrase :");
let voyelles = 'aeiouAEIOU';
let count = 0;

for (let char of phrase) {
    if (voyelles.includes(char)) {
        count++;
    }
}

console.log("Le nombre de voyelles dans la phrase est : " + count);


