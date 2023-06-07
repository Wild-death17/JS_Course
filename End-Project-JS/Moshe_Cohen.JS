const cards = document.getElementsByClassName("Card"),
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
  Menu.style.display = "none";
}
function createCards() {
  var strCards = "";
  for (let i = 0; i < Letters.length; i++) {
    strCards += `<li tabindex="-1" class="Card">?</li>`;
  }
  GScreen.innerHTML = strCards;
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("keyup", function () {
      ClickedCard(this, i);
    });
  }
}
function ShuffleCards() {
  Letters.forEach(() => {
    R1 = Math.floor(Math.random() * Letters.length);
    R2 = Math.floor(Math.random() * Letters.length);
    Temp = Letters[R1];
    Letters[R1] = Letters[R2];
    Letters[R2] = Temp;
  });
}
HeadLine("Memory Cards !");
function HeadLine(string) {
  document.getElementsByTagName("h1")[0].innerHTML = string;
}
//--execution-function--\/--
let CardsMatched = 0;
let FirstCard;
function ClickedCard(Element, Idx) {
  if (FirstCard !== Element) {
    Element.innerHTML = `${Letters[Idx]}`;
    if (!FirstCard) return (FirstCard = Element);
    if (FirstCard.innerHTML === Element.innerHTML) {
      CardsMatched++;
      if (Multiplayer) ScoreCount();
      FirstCard = "";
      if (CardsMatched == 12) EndGame();
    } else {
      setTimeout(() => {
        if (Multiplayer) ChangePlayer();
        FirstCard.innerHTML = "?";
        Element.innerHTML = "?";
        FirstCard = "";
      }, 1000);
    }
  }
}
//let PressedCards = ["", ""];
// function ClickedCard(Element, Idx) {
//   if (!PressedCards[1] && PressedCards[0] !== Element) {
//     Element.innerHTML = `${Letters[Idx]}`;
//     if (!PressedCards[0]) return (PressedCards[0] = Element);
//     PressedCards[1] = Element;
//     if (PressedCards[0].innerHTML === PressedCards[1].innerHTML) {
//       CardsMatched++;
//       if (Multiplayer) ScoreCount();
//       if (CardsMatched == 12) EndGame();
//     } else {
//       setTimeout(() => {
//         if (Multiplayer) ChangePlayer();
//         PressedCards[0].innerHTML = "?";
//         PressedCards[1].innerHTML = "?";
//       }, 1000);
//     }
//     setTimeout(() => {
//       PressedCards[0] = "";
//       PressedCards[1] = "";
//     }, 1000);
//   }
// }
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
