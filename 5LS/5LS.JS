const Map = document.getElementById("Map");

function h() {
  let h1arr = document.getElementsByTagName("p");
  for (let x of h1arr) {
    alert(x.innerHTML);
    x.onclick = function () {
      fullName(this, "Moshe Cohen");
    };
  }
}

function fullName(elem, name) {
  elem.innerHTML = name;
}
function ChangeName() {
  Map.innerHTML = "kinki";
}
function c() {
  document.getElementById("a").innerHTML = "b";
  document.getElementById("Btn").onclick = b;
}
function b() {
  document.getElementById("a").innerHTML = "a";
  document.getElementById("Btn").onclick = c;
}
var u = false;
function d() {
  if (!u) {
    document.getElementById("g").innerHTML = "CHANGED";
    u = true;
  } else {
    document.getElementById("g").innerHTML = "NOT-CHANGED";
    u = false;
  }
}
