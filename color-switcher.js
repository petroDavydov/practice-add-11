// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548",
// ];

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const refs = {
//   buttonStart: document.querySelector('[data-action="start"]'),
//   buttonStop: document.querySelector('[data-action="stop"]'),
//   body: document.body,
// };

// refs.buttonStart.addEventListener("click", onStart);
// refs.buttonStop.addEventListener("click", onStop);

// let intervalId = null;

// function onStart() {
//   refs.buttonStart.disabled = true;
//   intervalId = setInterval(() => {
//     refs.body.style.background = randomColor();
//   }, 1000);
// }

// function onStop() {
//   clearInterval(intervalId);
//   refs.buttonStart.disabled = false;
// }

// function randomColor() {
//   return `rgb(${randomIntegerFromInterval(0, 255)},
//   ${randomIntegerFromInterval(0, 255)},${randomIntegerFromInterval(0, 255)})`;
// }

// =================================
class ColorSwitch {
	constructor(selector, colors) {
	  this.colors = colors;
	  this.container = document.querySelector(selector);
	  this.startBtn = this.container.querySelector(".start");
	  this.stopBtn = this.container.querySelector(".stop");
	  this.intervalId = null;
	}
	randomIntegerFromInterval = (min, max) => {
	  return Math.floor(Math.random() * (max - min + 1) + min);
	};
	getRandomColor() {
	  return `rgb(${this.randomIntegerFromInterval(
		0,
		255
	  )}, ${this.randomIntegerFromInterval(
		0,
		255
	  )}, ${this.randomIntegerFromInterval(0, 255)})`;
	}
	changeColor() {
		// console.log(this);
	  this.startBtn.disabled = true;
	  this.intervalId = setInterval(() => {
		document.body.style.background = this.getRandomColor();
		// this.colors[
		//   this.randomIntegerFromInterval(0, this.colors.length - 1)
		// ];
	  }, 1000);
	}
	stopChangeColor() {
	  this.startBtn.disabled = false;
	  clearInterval(this.intervalId);
	}
	addListeners() {
	  this.startBtn.addEventListener("click", this.changeColor.bind(this));
	  this.stopBtn.addEventListener("click", this.stopChangeColor.bind(this));
	}
  }
  const colors = [
	"#FFFFFF",
	"#2196F3",
	"#4CAF50",
	"#FF9800",
	"#009688",
	"#795548",
  ];
  const switcher = new ColorSwitch(".container", colors);
  switcher.addListeners();