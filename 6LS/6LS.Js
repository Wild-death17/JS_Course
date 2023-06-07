const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const timer = document.getElementById("timer");
const Stop = document.getElementById("stop");
const Start = document.getElementById("start");
const Cube = document.getElementById("Cube");
// 1
a.addEventListener("click", f);
b.addEventListener("click", f, true);
c.addEventListener("click", f);
function f() {
  alert(this);
}

// 2
Stop.addEventListener("click", stop);
Start.addEventListener("click", restart);

Time = setInterval(changeTime, 1000);
function changeTime() {
  const d = new Date();
  timer.innerHTML = d.toLocaleTimeString();
}
function stop() {
  clearInterval(Time);
}
function restart() {
  Time = setInterval(changeTime, 1000);
}
// 3

var bclr = false;
var pxl = 100;
var pxl2 = 100;
function tik() {
  setInterval(blink, 500);
}
function tok() {
  setInterval(move, 500);
}

function blink() {
  if (!bclr) {
    Cube.style.backgroundColor = "gray";
    bclr = true;
  } else {
    Cube.style.backgroundColor = "brown";
    bclr = false;
  }
}
function move() {
  if (pxl == 0) {
    Cube.style.top = `${pxl2}px`;
    pxl2 += 100;
    if (pxl2 == 800) {
      pxl2 = 0;
    }
  }
  Cube.style.left = `${pxl}px`;
  pxl += 100;
  if (pxl == 800) {
    pxl = 0;
  }
  console.log(Cube.style.left);
}
