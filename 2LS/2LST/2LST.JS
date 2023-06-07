var person = {
  firstName: "moshe",
  lastName: "cohen",
  age: 23,
};

function taking() {
  person.firstName = document.getElementById("a").value;
  person.lastName = document.getElementById("b").value;
  person.age = document.getElementById("c").value;
}
function send() {
  document.getElementById("1").innerHTML = person.firstName;
  document.getElementById("2").innerHTML = person.lastName;
  document.getElementById("3").innerHTML = person.age;
}
function insert() {
  document.getElementById("a").value = person.firstName;
  document.getElementById("b").value = person.lastName;
  document.getElementById("c").value = person.age;
}
