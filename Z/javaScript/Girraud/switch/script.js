let heureUser = prompt("Donnez votre heure");
let heure = Number(heureUser);  // Convertir l'entrée en nombre

if (!isNaN(heure)) {  // Vérifier si l'entrée est un nombre valide
    switch (true) {
        case (heure > 6 && heure < 12):
            alert("C'est la matinée");
            break;
        case (heure === 12):
            alert("C'est midi");
            break;
        case (heure > 12 && heure < 18):
            alert("C'est l'après-midi");
            break;
        case (heure >= 18 && heure <= 24):
            alert("C'est la nuit");
            break;
        case (heure >= 0 && heure <= 6):
            alert("C'est la nuit");
            break;
        default:
            alert("Mauvaise valeur");
    }
} else {
    alert("Mauvais type de valeur");
}
 