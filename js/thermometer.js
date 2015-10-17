var interval = 150;
function progressAnimate (value) {
  var btn = document.getElementById("btn");
  btn.disabled = true;
  var progress = document.getElementById('th-animated');
  progress.value = value;
  value++;
  var t = setTimeout("progressAnimate(" + value + ")", interval);
  if (value === 25 || value === 50 || value === 75) {
    interval = 1000;
  } else if (value === 26 || value === 51 || value === 76) {
    interval = 100;
  } else if (value === 100){
    progress.value = 100;
    btn.disabled = false;
    clearTimeout(t);
  }
}
