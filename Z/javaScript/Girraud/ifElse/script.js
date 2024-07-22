/*let heure = 18

if (heure < 12) {
    alert("bonjour")
} else {
    alert("bonsoir")
}*/

// les conditions en JS (Un cas simple sans limite de nombre et sans opérateur logique)

/*let heure = 9

if (typeof heure === "number" === true) {
    if(heure <= 18 === true) {
        alert("bonjour")
    } else if (heure === 12 === true) {
        alert("il est midi")
    } else if (heure < 12 === true) {
        alert("c'est le matain")
    }else {
        alert("c'est le soir")
    }
}else {
    alert("mauvais type de valeur")
}*/

// les conditions en JS (Un cas simple sans limite de nombre et avec opérateur logique)

let heure = 9
let heureUser = prompt("quel heure est-il ?")
heureUser = Number(heureUser)

/*if (!isNaN(heureUser)) {
    if (heureUser > 6 && heureUser < 12) {
        console.log("C'est la matinée");
    } else if (heureUser === 12) {
        console.log("C'est  midi");
    } else if (heureUser > 12 && heureUser < 18) {
        console.log("C'est l'après-midi");
    } else if (heureUser > 0 && heureUser <= 24) {
        console.log("C'est la nuit");
    } else {
        console.log("Mauvaise valeur");
    } 
} else {
    console.log("Mauvais type de valeur");
}*/

if (!isNaN(heureUser)) {
    if (heureUser > 6 && heureUser < 12) {
        console.log("C'est la matinée");
    } else if (heureUser === 12){
        console.log("C'est  midi");
    } else if ( heureUser> 12 && heureUser <= 18 ){
        console.log("C'est l'après midi")
    } else if (heureUser > 18 && heureUser <= 24){
        console.log("c'est le soir")
    } else{
        console.log("Entrez une valeur entre 0 & 24")
    }
}else{
    console.log("mauvaise valeur")
}
