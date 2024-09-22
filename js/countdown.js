let countDown = new Date("Nov 21, 2024 09:30:00").getTime();
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDown - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector("#timer").innerHTML = `
        <div class='tag'>
            <span class='value'>${days}</span> 
            <span class='label'>Jours</span>
        </div>
        <div class='tag'>
            <span class='value'>${hours}</span>  
            <span class='label'>Heures</span>
        </div>
        <br>
        <div class='tag'>
            <span class='value'>${minutes}</span> 
            <span class='label'>Minutes</span>  
        </div>
        <div class='tag'>
            <span class='value'>${seconds}</span> 
            <span class='label'>Secondes</span>   
        </div>
    `;

    if (distance < 0) {
        clearInterval(x);
        document.querySelector("#timer").innerHTML = "EXPIRED";
    }
}, 1000);