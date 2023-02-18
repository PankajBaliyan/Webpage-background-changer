const red = document.getElementById("range-slider");
const green = document.getElementById("range-slider2");
const blue = document.getElementById("range-slider3");
const body = document.getElementsByTagName("body")[0];

red.addEventListener("input", setColor);
green.addEventListener("input", setColor);
blue.addEventListener("input", setColor);

function setColor() {
  let r = red.value;
  let g = green.value;
  let b = blue.value;

  body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

VerlyRange("range-slider", "#ff0000");
VerlyRange("range-slider2", "#008000");
VerlyRange("range-slider3", "#00008B");
