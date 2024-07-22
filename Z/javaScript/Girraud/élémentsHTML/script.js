let monTitre = document.getElementById("titre")
console.log(monTitre) 

// pour recuperer les élément qui sont entre 2 balise ouvrante et fermente 
// on utilise "innerHTML"
// Mais attention il renvoie absolument tout ce qui se trouve dans ces balise comme texte
// du coups si il ya des balise aussi elles seront lues comme du texte
console.log(monTitre.innerHTML) 

// Pour ne recuperer que le contenu on est obligé d'utiliser la propriété 
// textContent
console.log(monTitre.textContent)



let para = document.getElementsByTagName("p")
console.log(para.length)

let classic = document.getElementsByClassName("paragraphe")
console.log(classic.length)

let puce = document.querySelector("ul")
console.log(puce)

let puces = document.querySelectorAll("li")
console.log(puces)



// :::::::::::::::::::::::::::Modifier un élément via le JS :::::::::::://

// j'ai modifier le titre avec innerHTML

let modif = document.getElementById('titre')
modif.innerHTML = "le titre est modifié"
console.log(modif.innerHTML)

// Si je veux ajouter du text 
modif.innerHTML += " titre rajouté"

// on peut aussi y ajouter des balise
modif.innerHTML += " </br><strong>  titre rajouté avec la balise</strong>"

// on peut modifier les attribut HTML 
// a faire

// on peut modifier le CSS 
modif.style.color = 'red'
modif.style.color = 'blue'


// /////////////////creer un element en html/////////////////////
let nlle = document.createElement("div")
// je lui donne un h1
let nlle2 = document.createElement("h1")
// je crée le texte a inséré dans le H1
let texteInsert = document.createTextNode('je suis le nouveau texte ddd')
// j'insere la balise h1 dans la balise div
nlle.appendChild(nlle2)
// j'insere le texte dans le h1
nlle2.appendChild(texteInsert)
// j'insere toute ma balise dans le body
document.body.appendChild(nlle)

// document.body.insertBefore(nlle, maliste)


/////////////////////////////////////////////////////

//je créér la div
let divCreat = document.createElement("div")
//je créé le paragraphe
let textCreat = document.createElement("p")
// je créé de texte
let paraCreat = document.createTextNode("c'est le nouveau texte qui est ajouter")

// je met le texte dans le paragraphe
divCreat.appendChild(textCreat)
// je met le paragraphe dans la div
textCreat.appendChild(paraCreat)
// je mets la div dans le body
document.body.appendChild(divCreat)

document.body.insertBefore(divCreat, titre)







