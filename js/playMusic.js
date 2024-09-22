function playMusic() {
    console.log("playMusic called");
    var audio = document.getElementById("myAudio");
    audio.load(); // Ensure the audio is loaded before playing
    audio.play().then(() => {
        console.log("Audio played successfully");
    }).catch(error => {
        console.error("Audio play failed:", error);
    });
}