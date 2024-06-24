// let nouvelElement = document.createElement("div");

// //Récupérer un élément parent existant
// let parentElement = document.getElementById("conteneur");

// //Ajouter le nouvel élément au parent
// parentElement.appendChild(nouvelElement);

// //Modifier le contenu du nouvel élément
// nouvelElement.textContent = "Ceci est un nouveau paragraphe";

// //Modifier la couleur du texte du nouvel élément
// nouvelElement.style.color = "red";

// let titre = "c'est mon titre"
// let paragraphe = "c'est mon paragraphe"
// let test = "c'est mon test"

// let nlleElement = document.createElement("div")
// let autreElement = document.createElement("h1")
// let autreElement2 = document.createElement("p")

// // let parentElement = document.getElementById("conteneur")

// autreElement.textContent = titre
// autreElement2.textContent = paragraphe

// nlleElement.appendChild(autreElement)
// nlleElement.appendChild(autreElement2)

// let conteneur = document.querySelector(".conteneur")
// // let body = document.querySelector("body")

// conteneur.appendChild(nlleElement)

// let div = `
//     <conteneur>
//         <h1>${test}</h1>
//         <h1>${titre}</h1>
//         <h1>${paragraphe}</h1>
//     </conteneur>`

// conteneur.innerHTML = div

// https://www.facebook.com/help/1222350381541557/?helpref=related_articles


let a = 5;
let b = 10;

console.log("Avant l'échange : a = " + a + ", b = " + b);

let temp = a;
a = b;
b = temp;

console.log("Après l'échange : a = " + a + ", b = " + b);