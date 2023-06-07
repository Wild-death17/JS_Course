var Table = {
  Height: "1000CM",
  Width: "2000CM",
  NumOfLegs: "4",
  Material: "Wood",
};

const Sport = ["BasketBall", "FootBall", "VolleyBall", "SkateBoarding"];

function TurnTable() {
  var text = "";
  for (let x in Table) {
    text += [x] + ": " + Table[x] + ",<br>";
  }
  document.getElementById("a").innerHTML = text;
}
function ShowSport() {
  var txt = "";
  for (let x in Sport) {
    txt += `${Sport[x]} ,<br>`;
  }
  document.getElementById("b").innerHTML = txt;
}
