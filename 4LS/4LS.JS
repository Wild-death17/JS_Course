function f() {
  let x = document.getElementsByTagName("h1");
  let y = document.getElementsByClassName("class");
  let z = document.querySelectorAll(".class");

  for (let s of x) {
    alert(s.innerHTML);
    s.onclick = k;
  }
  for (let s of y) {
    alert(s.innerHTML);
  }
  for (let s of z) {
    alert(s.innerHTML);
  }
}
function u() {
  let x = document.getElementsByTagName("h1");
  let y = document.getElementsByClassName("clas");
  let z = document.querySelectorAll(".clas");

  for (let s of x) {
    alert(s.innerHTML);
    s.onclick = k;
  }
  for (let s of y) {
    alert(s.innerHTML);
  }
  for (let s of z) {
    alert(s.innerHTML);
  }
}
function c() {
  alert("HA GAYYYYY!!!!");
}
function k() {
  alert("HA GAYYYYY!!!!");
}
// amihai
function h() {
  let h1arr = document.getElementsByTagName("h1");
  let classArr = document.getElementsByClassName("h");
  let selector = document.querySelectorAll(".h");

  for (let x of h1arr) {
    alert(x.innerHTML);
    //x.onclick=function(){fullName1("amichai tsuriel");};
    x.onclick = f;
  }
}

function fullName() {
  this.innerHTML = "ami tsur";
}

function fullName1(name) {
  //הthis
  // לא מתייחס כרגע לתגית
  alert(this.innerHTML);
  this.innerHTML = name;
}

function f() {
  alert(this.innerHTML);
  fullName1("amichai");
}

function p() {}
