document.getElementById("RSVPform").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi immédiat du formulaire

    // Supprime le message précédent s'il existe
    const existingMessage = document.getElementById('sendingMessage');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Création de l'élément de message "Envoi en cours..."
    var sendingMessage = document.createElement('div');
    sendingMessage.id = 'sendingMessage'; // Ajout d'un ID pour une gestion plus simple
    sendingMessage.textContent = 'Envoi en cours...';
    sendingMessage.style.position = 'fixed';
    sendingMessage.style.top = '50%';
    sendingMessage.style.left = '50%';
    sendingMessage.style.transform = 'translate(-50%, -50%)';
    sendingMessage.style.backgroundColor = '#333333'; // Fond grise sombre
    sendingMessage.style.color = '#ffffff'; // Texte blanc
    sendingMessage.style.padding = '20px';
    sendingMessage.style.borderRadius = '5px';
    sendingMessage.style.zIndex = '9999';
    sendingMessage.style.border = '2px solid #1a1a1a'; // Bordure noire-grise sombre
    document.body.appendChild(sendingMessage);

    // Récupération des données du formulaire
    var formData = new FormData(document.getElementById("RSVPform"));

    // Envoi du formulaire via AJAX (Fetch API)
    fetch("mailer.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(responseText => {
        // Si le mail est envoyé avec succès, on modifie le message
        sendingMessage.textContent = "Envoyé avec succès !";
        sendingMessage.style.border = "2px solid #000000"; // Bordure noire
        sendingMessage.style.color = "#ffffff"; // Texte blanc
        sendingMessage.style.backgroundColor = "#333333"; // Fond noir-gris légèrement plus clair
    })
    .catch(error => {
        // Si une erreur est survenue, on modifie le message
        sendingMessage.textContent = "Échec de l'envoi .";
        sendingMessage.style.border = "2px solid #000000"; // Bordure noire
        sendingMessage.style.color = "#ffffff"; // Texte blanc
        sendingMessage.style.backgroundColor = "#333333"; // Fond noir-gris légèrement plus clair
    });
});
