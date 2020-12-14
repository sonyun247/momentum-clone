const API_KEY = "1d6d82ecac1647ee5c9348cf0462e8c3";
const COORDS = "coords";
const weather = document.querySelector(".weather-wrapper"),
  weatherTemp = weather.querySelector(".js-weather-text_temp"),
  weatherPlace = weather.querySelector(".js-weather-text_place"),
  weatherImage = weather.querySelector(".js-weather-image");

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      const conditionImage = json.weather[0].icon;
      const temperature = json.main.temp;
      const place = json.name;
      weatherImage.src = `http://openweathermap.org/img/wn/${conditionImage}@2x.png`;
      weatherTemp.innerText = `${temperature} ℃`;
      weatherPlace.innerText = `@ ${place}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("GEO failed");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}
function initWeather() {
  loadCoords();
}
initWeather();
