let nowDate = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[nowDate.getDay()];
let hours = nowDate.getHours();
if (hours < 10) {
  hours = "0" + hours;
}
let minutes = nowDate.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
}
let currentDateTime = document.querySelector("#current-date");
currentDateTime.innerHTML = `${day} ${hours}:${minutes}`;

function findCity(event) {
  event.preventDefault();
  let city = document.querySelector("#input-city");
  let replaceCity = document.querySelector("#current-city");
  if (city.value) {
    replaceCity.innerHTML = city.value;
    let apiKey = "41c8677f21e466c9b152647e17c8d1ac";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
  } else {
    alert("Please input a city!!!👇");
  }
}

let searchCity = document.querySelector("#find-city");
searchCity.addEventListener("submit", findCity);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let cityTemperature = document.querySelector("#id-temperature");
  cityTemperature.innerHTML = `${temperature}`;
}

function showCity(response) {
  let replaceCity = document.querySelector("#current-city");
  replaceCity.innerHTML = response.data.name;
}

function currentPosition(position) {
  let apiKey = "41c8677f21e466c9b152647e17c8d1ac";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showTemperature);
  axios.get(url).then(showCity);
}

function navigationCity(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentPosition);
}

let currentCity = document.querySelector("#current-location");
currentCity.addEventListener("click", navigationCity);
