const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(".js-clock__title");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes
    }`;
}
function initClock() {
  getTime();
  setInterval(getTime, 1000);
}
initClock();
