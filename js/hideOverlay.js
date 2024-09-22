function hideOverlay() {
    console.log("hideOverlay called");
    var overlay = document.getElementById('overlay');
    overlay.style.display = "none";
    document.body.classList.remove("no-scroll");
}