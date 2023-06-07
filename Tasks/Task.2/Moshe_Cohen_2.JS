// Const Zone

const Carousel = document.getElementById("carousel");
const CarouselImg = document.getElementById("carousel_seat");
const LeftArrow = document.getElementById("left");
const RightArrow = document.getElementById("right");
const Indicator = document.getElementsByClassName("radial_indicator");

// Setup

const ImgArr = [
  "url(./img/1.jpg)",
  "url(./img/2.jpg)",
  "url(./img/3.jpg)",
  "url(./img/4.jpg)",
];
CarouselImg.style.backgroundImage = ImgArr[0];
Indicator[0].style.backgroundColor = "grey";

// //OnClick Zone

RightArrow.onclick = R;
LeftArrow.onclick = L;
for (let i in Indicator) {
  Indicator[i].onclick = K;
}

// Test Zone

console.log(ImgArr);
console.log(ImgArr.length);
console.log(LeftArrow);
console.log(CarouselImg);
console.log(RightArrow);
console.log(Indicator);

// Co-Dependent functions

var i = 0;
function R() {
  //remove radio button color
  Indicator[i].style.backgroundColor = "unset";
  // set i++
  i++;
  //reset i when out of bounds
  if (i == ImgArr.length) i = 0;
  //change main img
  CarouselImg.style.backgroundImage = ImgArr[i];
  //add radio button color
  Indicator[i].style.backgroundColor = "grey";
}
// do the same but i--
function L() {
  //remove radio button color
  Indicator[i].style.backgroundColor = "unset";
  i--;
  if (i < 0) i = ImgArr.length - 1;
  CarouselImg.style.backgroundImage = ImgArr[i];
  //change radio button color
  Indicator[i].style.backgroundColor = "grey";
}
function K() {
  for (let k = 0; k < Indicator.length; k++) {
    //remove radio button color
    Indicator[k].style.backgroundColor = "unset";
    if (this == Indicator[k]) {
      //change main img
      CarouselImg.style.backgroundImage = ImgArr[k];
      //add radio button color
      Indicator[k].style.backgroundColor = "grey";
      i = k;
    }
  }
}
