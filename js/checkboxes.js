var present = document.getElementById('presence');
var absent = document.getElementById('absence');

if (present.checked) {
  document.getElementById('absence').checked = false;
}

if (absent.checked) {
  document.getElementById('presence').checked = false;
}