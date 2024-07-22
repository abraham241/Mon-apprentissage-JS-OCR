document.addEventListenerLoader("DOMContentLoaded", () => {
    // seat designe chaque siege
   const seats = document.querySelectorAll('seat')    
    // ici c'est la phrase du nobre de place qui sont reserve qui est afficher et recupérer  
   const phrase = document.getElementById('selection')
    // ici c'est la  nobre de place qui sont reservées
   const status = getElementById('statusMessage')
    //  ici c'est le bouton   
   const btn = document.getElementById('btn-reserve')
   
    // je me créer d'abord un conteur qui va conté le nombre de places selectionnerees 
    let selectedSeatsCount = 0
    
    // je crée tout d'abord une fonction qui permet de compter le nombre de places selectionnerees
    function updateSelectedCount() {
        phrase.innerText = `Places selectionnées : ${selectedSeatsCount}`
    } 

    // ici c'est la fonction qui permet de gérer le click sur un siège
    // la fonction seatClickHandler est celle qui va me lancer la fonction updateSelectedCount parce que 
    // c'est la fonction qui permet de compter et de montrer le nombre de places selectionnerees
    function seatClickHandler() {
        if(this.classList.contains('selected')) {
            this.classList.remove('selected')
            selectedSeatsCount -= 1
        } else {
            this.classList.add('selected')
            selectedSeatsCount += 1
        }
        updateSelectedCount()
    }
})