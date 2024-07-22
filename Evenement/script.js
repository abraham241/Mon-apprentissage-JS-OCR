let bouton = document.getElementById("btn2");

bouton.addEventListener("click",  () => { 
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
})


let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    console.log("Bonjour")
})


// N’hésitez pas à faire un console.log de event pour explorer un peu cette variable. JavaScript propose beaucoup d’informations pour parer à toutes les situations. Certaines d’entre elles sont particulièrement intéressantes : 
// event.target : renvoie l’élément HTML qui a déclenché l’événement ;
// event.key : la touche appuyée quand l’événement écouté est lié au clavier ;
// event.clientX et event.clientY : les coordonnées de la souris quand l’événement écouté est lié à la souris.
