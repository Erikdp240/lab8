function init() {
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', showText);
}

function showText() {
  var text = document.getElementById('entryinput');
  document.getElementById('textoutput').innerHTML = text.value;
  alert("Erik Pacheco: " + text.value);
}

window.addEventListener('load', init);