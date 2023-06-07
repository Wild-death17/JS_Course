const a = document.getElementById("a");
const btn = document.getElementById("btn");
const b = document.getElementById("b");
const c = document.getElementById("c");
const img = document.getElementById("d");
var isImgShow = false;
const arrey = [
  "moshe",
  "niki",
  "moshe",
  "niki",
  "moshe",
  "niki",
  "moshe",
  "niki",
];
btn.onclick = scrambler;

function scrambler() {
  a.innerHTML = arrey;
  arrey.forEach(() => {
    index = arrey.length;
    Room1 = Math.floor(Math.random() * index);
    Room2 = Math.floor(Math.random() * index);
    Temp = arrey[Room1];
    arrey[Room1] = arrey[Room2];
    arrey[Room2] = Temp;
  });
  b.innerHTML = arrey;
}
function Recursion(num) {
  while (num > 0) {
    c.innerHTML = num;
    num--;
    Recursion(num);
  }
}
img.addEventListener("mouseenter", ChangeBckGrd);
img.addEventListener("mouseleave", ChangeBckGrd);
function ChangeBckGrd() {
  if (!isImgShow) {
    img.style.backgroundColor = "Green";
    img.src = "";
    isImgShow = true;
  } else {
    img.style.backgroundColor = "";
    img.src = "Site-img.jpg";
    isImgShow = false;
  }
}
