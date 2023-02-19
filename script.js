VerlyRange("range-slider", "#ff0000");
VerlyRange("range-slider2", "#008000");
VerlyRange("range-slider3", "rgb(0, 0, 255)");

const body = document.body;
const red = document.getElementById('range-slider');
const green = document.getElementById('range-slider2');
const blue = document.getElementById('range-slider3');
const sliders = document.querySelector('.all-sliders');

function setColor() {
  requestAnimationFrame(() => {
    const r = red.value;
    const g = green.value;
    const b = blue.value;

    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
}

sliders.addEventListener('input', (event) => {
  if (event.target.type === 'range') {
    setColor();
  }
});
