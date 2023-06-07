const Arrey = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = Arrey;

function f() {
  Arrey.sort(function (a, b) {
    return b - a;
  });
  document.getElementById("demo").innerHTML = Arrey;
}
const cars = [
  { Model: "Adidas", Yom: 1996 },
  { Model: "Volvo", Yom: 1943 },
  { Model: "Honda", Yom: 1999 },
];
document.getElementById("demo1").innerHTML =
  cars[0].Model +
  " " +
  cars[0].Yom +
  "<br>" +
  cars[1].Model +
  " " +
  cars[1].Yom +
  "<br>" +
  cars[2].Model +
  " " +
  cars[2].Yom;
document.getElementById("demo2").innerHTML =
  cars[0].Model +
  " " +
  cars[0].Yom +
  "<br>" +
  cars[1].Model +
  " " +
  cars[1].Yom +
  "<br>" +
  cars[2].Model +
  " " +
  cars[2].Yom;

function c() {
  var bla = cars.sort(function (a, b) {
    let x = a.Model.toLowerCase();
    let y = b.Model.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  document.getElementById("demo1").innerHTML =
    bla[0].Model +
    " " +
    bla[0].Yom +
    "<br>" +
    bla[1].Model +
    " " +
    bla[1].Yom +
    "<br>" +
    bla[2].Model +
    " " +
    bla[2].Yom;
}
function b() {
  var blabla = cars.sort(function (a, b) {
    return a.Yom - b.Yom;
  });
  document.getElementById("demo2").innerHTML =
    blabla[0].Model +
    " " +
    blabla[0].Yom +
    "<br>" +
    blabla[1].Model +
    " " +
    blabla[1].Yom +
    "<br>" +
    blabla[2].Model +
    " " +
    blabla[2].Yom;
}
