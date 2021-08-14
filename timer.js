class CountdownTimer {
  constructor({ targetDate, selector }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
  }

  getRefs() {
    const container = document.querySelector(this.selector);
    const daysRef = container.querySelector('[data-value="days"]');
    const hoursRef = container.querySelector('[data-value="hours"]');
    const minsRef = container.querySelector('[data-value="mins"]');
    const secsRef = container.querySelector('[data-value="secs"]');
    return { daysRef, hoursRef, minsRef, secsRef, container };
  }

  upDateTimer({ daysRef, hoursRef, minsRef, secsRef, container }) {
    const time = this.targetDate - Date.now();

    if (time < 0) {
      clearInterval(this.intervalId);
      container.innerHTML = "<h1>Time is over</h1>";
      return;
    }

    daysRef.textContent = Math.floor(time / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, "0");

    hoursRef.textContent = Math.floor(
      (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
      .toString()
      .padStart(2, "0");
    minsRef.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");
    secsRef.textContent = Math.floor((time % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");
  }

  start() {
    this.intervalId = setInterval(() => {
      this.upDateTimer(this.getRefs());
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Aug 14, 2021 17:16"),
});

const timer2 = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Aug 25, 2021"),
});

timer.start();
// timer2.start();
