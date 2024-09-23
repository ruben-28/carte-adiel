// Fonction qui déclenche l'animation et retire l'overlay
function hideOverlay() {
    const btnLink = document.querySelector('.btnLink');
    
    // Ajoute la classe 'animate' pour déclencher l'animation de la flèche
    btnLink.classList.add('animate');
    
    // Attends la fin de l'animation avant de retirer l'overlay
    setTimeout(() => {
        document.getElementById('overlay').style.display = 'none';
        document.body.classList.remove('no-scroll'); // Permet de scroller après avoir caché l'overlay
    }, 250); // Correspond à la durée de l'animation (0.5s)
}
