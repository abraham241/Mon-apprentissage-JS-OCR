// On va déclarer un tabeau d'objet, ca permet de sauvegarder 
// tous les éléments de celui ci

const question = [
    {
        question: "quel est le nom du pays ?",
        img: "cameroun.jpeg",
        name:"Cameroun"
    },
    {
        question: "quel est le nom du pays ?",
        img: "Coré.jpeg",
        name:"Coré"
    },
    {
        question: "quel est le nom du pays ?",
        img: "france.jpeg",
        name:"france"
    },
    {
        question: "quel est le nom du pays ?",
        img: "Gabon.jpeg",
        name:"Gabon"
    },
    {
        question: "quel est le nom du pays ?",
        img: "japon.jpeg",
        name:"japon"
    },
];

// intialisation des questions a 0
let currentQuestion = 0
let score = 0

// récupération des éléments du DOM
const quizzimg= document.querySelector('#quizz-img')
const quizzQuestion = document.querySelector("#quizz-question")
const inputResultat = document.querySelector("#resultat")
const btnNext = document.querySelector("#next")
const resultatFinal =document.querySelector("#resultatFinal")

// je crée d'abord un fonction qui va faire en sorte que mes questions se melengent 
// afin de renvoyer une question aléatoire a charque fois
function shuffle (array){
    // on décremente le questions 
    for(let i = array.length-1; i>0; i--){ 
        // on mélange les quetions du tableau
        const j = Math.floor(Math.random()* (i+1))
        // on compare les questions avec le tableau d'objet
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array  
}