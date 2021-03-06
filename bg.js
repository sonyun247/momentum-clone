const body = document.querySelector("body");

const IMG_NUMBER = 14;

function paintImage(selectedNum) {
  const image = new Image();
  image.src = `images/${selectedNum + 1}.jpg`;
  image.classList.add("bgImg");
  body.prepend(image);
}
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
function initBg() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
initBg();
