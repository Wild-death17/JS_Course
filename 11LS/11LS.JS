// const para = document.createElement("p"); //Create Element Paragraph & Store on Const para (Doesnt create it in html only in the JS)
// const node = document.createTextNode("This is New"); //Create Text & Store on Const node (Doesnt create it in html only in the JS)
// para.appendChild(node); //append As Last Child
// document.getElementById("demo").appendChild(para); //append As Last Child
// document.getElementById("demo").insertBefore(para,(Before Who?)); //append As First Child
// document.getElementById("demo").remove(); //Removes The Element (Delete0)

function AddSixDivs() {
  for (let i = 0; i < 6; i++) {
    div = document.createElement("div");
    div.id = `d${i + 1}`;
    Text = document.createTextNode(`This is Text ${i + 1}`);
    div.appendChild(Text);
    document.getElementById("demo").appendChild(div);
  }
}
function AddImg() {
  Img = document.createElement("img");
  Img.alt = "Gay People";
  document
    .getElementById("demo")
    .insertBefore(Img, document.getElementById("d3"));
}
function RemoveDiv() {
  document.getElementById("d5").remove();
}
function SwapDivWithPara() {
  document.getElementById("d3").remove();
  para = document.createElement("p");
  node = document.createTextNode("This is New");
  para.appendChild(node);
  document
    .getElementById("demo")
    .insertBefore(para, document.getElementById("d4"));
  alert(para);
}
