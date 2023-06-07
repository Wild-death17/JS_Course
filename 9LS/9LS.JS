const input = document.getElementById("SearchText");
const List = document.getElementById("DropList");
const Arrey = ["Afula", "Tiberus", "Tel-aviv", "Eilat", "Jerusalem", "Natania"];

input.addEventListener("input", GetNewArrey);
input.addEventListener("click", () => {
  Show(Arrey);
});
List.addEventListener("mouseleave", unShow);
function GetNewArrey() {
  const value = input.value;
  const index = value.length;
  const NewArrey = Arrey.filter((City) => {
    return City.indexOf(value) == 0;
    //return isSame(value, City, index);
  });
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
}
function Show(Arrey) {
  let Text = "";
  Arrey.sort();
  for (var i of Arrey) {
    Text += `<li onclick="autoComplete(this.innerHTML)">${i}</li>`;
  }
  List.innerHTML = Text;
  List.style.display = "block";
}
function unShow() {
  List.style.display = "none";
}
function autoComplete(item) {
  let Text = item;
  input.value = Text;
}
