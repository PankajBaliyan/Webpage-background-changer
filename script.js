let ImageSlider = document.getElementById("slider_value");
let rangeValue = document.getElementById("customRange2");

document.body.style.backgroundColor = "#eb83b5";

rangeValue.oninput = function () {
  ImageSlider.innerHTML = rangeValue.value;
  if (rangeValue.value < 20) {
    changeBackground("#eb83b5");
  } else if (rangeValue.value < 40) {
    changeBackground("#4bb2d6");
  } else if (rangeValue.value < 60) {
    changeBackground("#6d6af8");
  } else if (rangeValue.value < 80) {
    changeBackground("#b15f88");
  } else if (rangeValue.value < 100) {
    changeBackground("#806732");
  } else {
    changeBackground("#8cb2ee");
  }
};

function changeBackground(color) {
    document.body.style.background = color;
  }