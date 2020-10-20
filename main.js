var images = [
  "url('pics/pic1.jpg')",
  "url('pics/pic2.jpg')",
  "url('pics/pic3.jpg')",
];

var num = 0;
var pageImage = document.querySelector(".page-overview__images");
var timerCountdown;
var intervalTime = 5000;

startInterval(intervalTime);

function next() {
  var slider = document.getElementById("slider");
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
  var slider = document.getElementById("slider");
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
