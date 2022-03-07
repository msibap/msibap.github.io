let images = [
  "url('pics/pic1.webp')",
  "url('pics/pic2.webp')",
  "url('pics/pic3.webp')",
];

let num = 0;
let pageImage = document.getElementById("page-overview");
let timerCountdown;
let intervalTime = 5000;

startInterval(intervalTime);

function next() {
  let slider = document.getElementById("slider");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  // slider.src = images[num];
  pageImage.style.backgroundImage = images[num];

  clearInterval(timerCountdown); //sets timer to zero
  startInterval(intervalTime); //starts timer again
}

function prev() {
  let slider = document.getElementById("slider");
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  // slider.src = images[num];
  pageImage.style.backgroundImage = images[num];

  clearInterval(timerCountdown); //sets timer to zero
  startInterval(intervalTime); //starts timer again
}

function startInterval(t) {
  timerCountdown = setInterval(function () {
    num++;
    if (num >= images.length) {
      num = 0;
    }
    pageImage.style.backgroundImage = images[num];
  }, t);
}
