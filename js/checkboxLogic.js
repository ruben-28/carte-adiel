var vient = document.getElementById('presence');
var vientPas = document.getElementById('absence');

vient.addEventListener('change', function() {
    if(this.checked) {
        vientPas.checked = false;
    }
});

vientPas.addEventListener('change', function() {
    if(this.checked) {
        vient.checked = false;
    }
});