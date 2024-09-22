var present = document.getElementById('presence');
var absent = document.getElementById('absence');

present.addEventListener('change', function() {
    if (present.checked) {
        document.getElementById('absence').checked = false;
    }
});

absent.addEventListener('change', function() {
    if (absent.checked) {
      document.getElementById('presence').checked = false;
    }
});