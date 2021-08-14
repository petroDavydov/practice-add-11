const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  buttonStart: document.querySelector('[data-action="start"]'),
  buttonStop: document.querySelector('[data-action="stop"]'),
  body: document.body,
};

refs.buttonStart.addEventListener("click", onStart);
refs.buttonStop.addEventListener("click", onStop);

let intervalId = null;

function onStart() {
  refs.buttonStart.disabled = true;
  intervalId = setInterval(() => {
    refs.body.style.background = randomColor();
  }, 1000);
}

function onStop() {
  clearInterval(intervalId);
  refs.buttonStart.disabled = false;
}

function randomColor() {
  return `rgb(${randomIntegerFromInterval(0, 255)},
  ${randomIntegerFromInterval(0, 255)},${randomIntegerFromInterval(0, 255)})`;
}
