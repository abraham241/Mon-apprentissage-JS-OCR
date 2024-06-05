<!-- Exercice sur les variables -->
<!--
Et maintenant, entraînez-vous à manipuler des variables avec CodePen.
Vous gérez une bibliothèque qui contient 500 livres. Vous décidez de faire les opérations suivantes :
acheter 50 livres de plus ;
en jeter 10 ;
racheter 5 des livres jetés.
1. Créez une variable totalLivres initialisée à 500 et dans laquelle vous réaliserez ces opérations une par une, jusqu’à avoir le nombre final de livres.
2. Vérifiez le résultat grâce à l’instruction console.log.
3. Créez une nouvelle variable appelée affichageTotalLivres, en utilisant le résultat total précédemment calculé.
Cette variable devra contenir la chaîne de caractères ci-dessous :
“Notre bibliothèque possède TOTAL livres”
Avec TOTAL qui sera remplacé par le contenu de la variable totalLivres.
4. Affichez cette phrase grâce à l’instruction console.log.
-->

<!-- Exercice sur les Objets -->

<!--
Déclarez le nouveau ticket de cinéma
Un ticket de cinéma a plusieurs propriétés : un nom de film, un prix, un numéro de salle.
Déclarez un objet ticket avec les propriétés suivantes :
nomFilm ;
prix ;
numeroSalle.
Déclarez une variable nom avec votre nom.
Affichez les informations sur la borne
Affichez un message sur la borne : “Bonjour NOM, votre film NOMDEFILM est en salle NUMERODELASALLE”.
Créez une variable texteAffichage qui contient cette phrase, avec NOM, NOMDEFILM et NUMERODELASALLE remplacés par leur vraie valeur.
Vérifiez le résultat avec un console.log.

 -->

## ajouter des elements a un objet

## suprimmer des elements d'un bojet

## suprimmer des elements d'un tableau

## ajouter des elements d'un tableau

**\*\*** AJOUTER MODIFIER SUPPRIMER **\*\*** un élément d'un bojet et d'un tableau
?? trouver les différentes méthode pour le faire
?? comprendre les propriétés applicable aux tableaux
?? Ajouter des variables dans un tableau/objet

<!-- ///////////////// Lien de la documentation////////////// -->

https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps/Arrays

<!-- ///////////////// Lien de la documentation////////////// -->

**\*\*\*** Anotation importantes **\*\*\***

## Distinguez les copies par “valeur” et par “référence”

// Copie par valeur
let variableSimple1 = 25
let variableSimple2 = variableSimple1
C’est ce qu’on appelle la copie par valeur. Nous avons copié le contenu d’une variable à l’intérieur d’une autre variable. Nous avons donc deux variables indépendantes.

let variableComplexe1 = ['pomme', 'cerise']
let variableComplexe2 = variableComplexe1
Ici, nous n’avons pas deux tiroirs, c’est l’étiquette qui a été copiée. En d’autre termes, variable1 et variable2 sont deux étiquettes différentes pour le même tiroir. Nous avons donc deux variables qui pointent sur le même contenu.

Eh bien non, car JavaScript a pensé à tout ! 😃 Vous n’aurez donc qu’à utiliser un spread operator. Comme le ++ que nous avons déjà croisé, c’est un opérateur qui nous permet de faire automatiquement la copie, et cet opérateur s’écrit…

let variableComplexe3 = [...variableComplexe1];

<!-- Les différents types d'opérateurs -->
<
inférieur à
<=
inférieur ou égal à
===
égal à
> =
supérieur ou égal à
>
supérieur à
!==
différent de
