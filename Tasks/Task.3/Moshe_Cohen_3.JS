const input = document.getElementById("SearchText");
const List = document.getElementById("DropList");
const Arrey = ["Afula", "Tiberus", "Tel-aviv", "Eilat", "Jerusalem", "Natania"];
input.addEventListener("input", GetNewArrey);
List.addEventListener("mouseleave", unShow);
input.addEventListener("click", Send);

function GetNewArrey() {
  const value = input.value;
  const index = value.length;
  const NewArrey = Arrey.filter((City) => {
    return isSame(value, City, index);
  });
  console.log(NewArrey);
  Show(NewArrey);
}
function isSame(first, second, index) {
  for (var i = 0; i < index; i++) {
    if (first[i] != second[i]) return false;
  }
  return true;
}
function AddToArreyAndSort() {
  const value = input.value;
  Arrey.push(value);
  Arrey.sort();
  console.log(Arrey);
}
function Send() {
  Show(Arrey);
}
function Show(Arrey) {
  let Text = "";
  Arrey.sort();
  for (var i of Arrey) {
    Text += `<li>${i}</li>`;
  }
  List.innerHTML = Text;
  List.style.display = "block";
}
function unShow() {
  List.style.display = "none";
}
