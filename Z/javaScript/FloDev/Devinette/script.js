// Générer un nombre aléatoire
// Donner a l'utilisteur la capacité de rentrer un nombre
// Faire deviner l'utilisateur et si c'est faut, il recommence et on lui repose la question
// si il gagne on arrete


/*function devinette() {
    let nbrDevine = Math.random() * 11; // Génère un nombre aléatoire entre 0 et 11 (non inclus)
    let nbrArrondi = Math.floor(nbrDevine); // Arrondit vers le bas pour obtenir un entier entre 0 et 10
    let leNbr;

    do {
        leNbr = prompt("Devine le nombre"); // Demande à l'utilisateur de deviner le nombre
        leNbr = parseInt(leNbr, 10); // Convertit la chaîne entrée par l'utilisateur en nombre entier en base 10
        console.log(leNbr, nbrArrondi); // Affiche la valeur devinée et le nombre à deviner pour le débogage
        if (nbrArrondi > leNbr) {
            console.log("C'est trop petit");
        } else if (nbrArrondi < leNbr) {
            console.log("C'est trop grand");
        }
    } while (leNbr !== nbrArrondi); // Répète la boucle jusqu'à ce que l'utilisateur devine correctement

    console.log("Bravo, vous avez deviné le nombre!");
}

devinette();*/



////////////////////////////////////////////////////////////////////////

/*function devinetteFor() {
    let nbrDevine = Math.random() * 10;
    let nbrArrondi = Math.floor(nbrDevine);
    let leNbr;

    for (;;) { // Boucle infinie, équivalente à while (true)
        leNbr = prompt("Devine le nombre");
        leNbr = parseInt(leNbr, 10);
        console.log(leNbr, nbrArrondi);
        if (leNbr === nbrArrondi) {
            console.log("Bravo, vous avez deviné le nombre!");
            break; // Sortie de la boucle si le nombre est deviné
        } else if (nbrArrondi > leNbr) {
            console.log("C'est trop petit");
        } else {
            console.log("C'est trop grand");
        }
    }
}

devinetteFor();


/////////////////////////////////////////////////////

/*function devinetteWhile() {
    let nbrDevine = Math.random() * 11;
    let nbrArrondi = Math.floor(nbrDevine);
    let leNbr = -1; // Initialiser avec une valeur qui ne sera jamais égale à nbrArrondi

    while (leNbr !== nbrArrondi) {
        leNbr = prompt("Devine le nombre");
        leNbr = parseInt(leNbr, 10);
        console.log(leNbr, nbrArrondi);
        if (nbrArrondi > leNbr) {
            console.log("C'est trop petit");
        } else if (nbrArrondi < leNbr) {
            console.log("C'est trop grand");
        }
    }

    console.log("Bravo, vous avez deviné le nombre!");
}

devinetteWhile();*/




