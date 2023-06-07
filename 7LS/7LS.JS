var Max = document.getElementsByTagName("input")[0];
var Min = document.getElementsByTagName("input")[1];
var demo = document.getElementById("demo");

function f() {
  demo.innerHTML = k(Number(Max.value), Number(Min.value));
}

function k(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
