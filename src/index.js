function formatMonth() {
  let date = new Date();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  let day = date.getDate();

  return `${month} ${day}`;
}

function formateDate() {
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

  return `${day} ${hours}:${minutes}`;
}

function showTemperature(response) {
  console.log(response.data);
  let cityTemperature = document.querySelector("#id-temperature");
  let cityName = document.querySelector("#current-city");
  let monthDay = document.querySelector("#month-day");
  let currentDateTime = document.querySelector("#current-date");
  let cityDescription = document.querySelector("#current-description");
  let cityHumidity = document.querySelector("#humidity");
  let cityWind = document.querySelector("#wind");

  cityTemperature.innerHTML = Math.round(response.data.main.temp);
  cityName.innerHTML = response.data.name;
  monthDay.innerHTML = formatMonth();
  currentDateTime.innerHTML = formateDate();
  cityDescription.innerHTML = response.data.weather[0].description;
  cityHumidity.innerHTML = response.data.main.humidity;
  cityWind.innerHTML = response.data.wind.speed;
}

let apiKey = "41c8677f21e466c9b152647e17c8d1ac";
let city = "Kharkiv";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(url).then(showTemperature);
