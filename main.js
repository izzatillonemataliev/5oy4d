// let button = document.querySelector("#btn1");
// let button1 = document.querySelector("#btn3");

// function btnClick() {
//   let h2 = button.nextElementSibling;
//   if (+h2.textContent++) {
//   }
// }

// function btn1Click() {
//   let h2 = button.nextElementSibling;
//   if (+h2.textContent--) {
//   }
// }
// button.setAttribute("onclick", "btnClick()");
// button1.setAttribute("onclick", "btn1Click()");

// ------------------UY ISHI--------------------
let btn1 = document.querySelector("#btn1");
function changeBackgroundColor() {
  let randomColor1 = getRandomColor();
  let randomColor2 = getRandomColor();
  let gradient =
    "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
  document.body.style.background = gradient;
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return "rgb(" + r + "," + g + "," + b + ")";
}



function changeBackgroundColor2() {
  var randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
  var r = Math.floor(Math.random() * 256); // Random red value between 0 and 255
  var g = Math.floor(Math.random() * 256); // Random green value between 0 and 255
  var b = Math.floor(Math.random() * 256); // Random blue value between 0 and 255
  return 'rgb(' + r + ',' + g + ',' + b + ')'; // Construct the RGB color
}