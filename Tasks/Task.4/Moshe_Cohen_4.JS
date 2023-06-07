const cardBackView = document.getElementsByClassName("BackView"),
  cards = document.getElementsByClassName("Card"),
  GScreen = document.getElementById("Card_Deck"),
  Menu = document.getElementById("Menu"),
  Letters = [
    "A",
    "A",
    "B",
    "B",
    "C",
    "C",
    "D",
    "D",
    "E",
    "E",
    "F",
    "F",
    "G",
    "G",
    "H",
    "H",
    "I",
    "I",
    "J",
    "J",
    "K",
    "K",
    "L",
    "L",
  ];

//--Setup-functions-\/--
function StartGame() {
  createCards();
  ShuffleCards();
  CardsMatched = 0;
  Multiplayer = false;
  PressedCards[0] = PressedCards[1] = "";
  Menu.style.display = "none";
}
function createCards() {
  var strCards = "";
  for (i = 0; i < Letters.length; i++) {
    strCards += `<li tabindex="-1" class="Card">
    <div class="BackView"></div>
    <div class="FrontView">?</div>
  </li>`;
  }
  GScreen.innerHTML = strCards;
  for (var i of cards) i.addEventListener("keyup", ClickedCard);
}
function ShuffleCards() {
  Letters.forEach(() => {
    R1 = Math.floor(Math.random() * Letters.length);
    R2 = Math.floor(Math.random() * Letters.length);
    Temp = Letters[R1];
    Letters[R1] = Letters[R2];
    Letters[R2] = Temp;
  });
  for (var i in cardBackView) cardBackView[i].innerHTML = `${Letters[i]}`;
}
HeadLine("Memory Cards !");
function HeadLine(string) {
  document.getElementsByTagName("h1")[0].innerHTML = string;
}

//--execution-functions--\/--
let CardsMatched = 0;
let PressedCards = ["", ""];
function ClickedCard(Element) {
  let _ClickedCard = Element.target;
  if (!PressedCards[1] && !_ClickedCard.classList.contains("spin")) {
    FlipCard(_ClickedCard);
    if (!PressedCards[0]) return (PressedCards[0] = _ClickedCard);
    PressedCards[1] = _ClickedCard;
    FirstBackView = PressedCards[0].getElementsByClassName("BackView")[0];
    SecondBackView = PressedCards[1].getElementsByClassName("BackView")[0];
    if (MatchinginnerHTML(FirstBackView, SecondBackView)) {
      PressedCards[0].removeEventListener("keyup", _ClickedCard);
      PressedCards[1].removeEventListener("keyup", _ClickedCard);
      CardsMatched++;
      if (Multiplayer) ScoreCount();
      if (CardsMatched == 1) EndGame();
    } else {
      setTimeout(() => {
        if (Multiplayer) ChangePlayer();
        FlipCard(PressedCards[0]);
        FlipCard(PressedCards[1]);
      }, 1000);
    }

    setTimeout(() => {
      PressedCards[0] = "";
      PressedCards[1] = "";
    }, 1100);
  }
}
function FlipCard(Element) {
  if (Element.classList.contains("spin")) {
    Element.classList.remove("spin");
  } else {
    Element.classList.add("spin");
  }
}
function MatchinginnerHTML(First, Second) {
  if (First.innerHTML === Second.innerHTML) return true;
  return false;
}

//--End-Game-Stuff--\/--
function EndGame() {
  Menu.style.display = "block";
  Multi.style.display = "none";
  GScreen.innerHTML = "";
  if (Multiplayer) {
    if (Players[0] > Players[1])
      HeadLine(`Player 1 won with ${Players[0]} Points`);
    else if (Players[0] < Players[1])
      HeadLine(`Player 2 won with ${Players[1]} Points`);
    else HeadLine(`Its A Tie !`);
  } else {
    HeadLine("YOU WON!!!");
  }
}

//--Multiplayer-functions--\/--
const Multi = document.getElementById("Multi"),
  CurnPlayer = document.getElementById("CurnPlayer"),
  Player1Score = document.getElementById("Player1Score"),
  Player2Score = document.getElementById("Player2Score");
let Players = [,],
  IsPlayer1 = false,
  Multiplayer = false;
function MultiGame() {
  Players[0] = Players[1] = 0;
  IsPlayer1 = false;
  Multi.style.display = "block";
  ChangePlayer();
  PrintScore();
  StartGame();
  Multiplayer = true;
}
function ScoreCount() {
  if (IsPlayer1) Players[0]++;
  else Players[1]++;
  PrintScore();
}
function ChangePlayer() {
  if (!IsPlayer1) {
    IsPlayer1 = true;
    return (CurnPlayer.innerHTML = "Player 1 Is Playing");
  }
  IsPlayer1 = false;
  return (CurnPlayer.innerHTML = "Player 2 Is Playing");
}
function PrintScore() {
  Player1Score.innerHTML = `Player 1 : ${Players[0]}`;
  Player2Score.innerHTML = `Player 2 : ${Players[1]}`;
}
