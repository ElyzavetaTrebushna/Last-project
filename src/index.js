
function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector(".humidity").innerHTML=response.data.main.humidity;
  document.querySelector(".wind").innerHTML=Math.round(response.data.wind.speed);
  document.querySelector(".descr_day").innerHTML=response.data.weather[0].main;
  document.querySelector(".icon_today").innerHTML=response.data.weather[0].icon;
          
function searchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function searching(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let form = document.querySelector("#searching-form");
form.addEventListener("submit", searching);

let current_btn = document.querySelector("#current_btn");
current_btn.addEventListener("click", getCurrentLocation);

let today = new Date();
let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let todayIndex = today.getDay();
let hours = today.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = today.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let h2 = document.querySelector(".today");
h2.innerHTML = `${week[todayIndex]} ${hours}:${minutes}`;

function convertTempF(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}
function convertTempC(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

let farenheit = document.querySelector("#farenheit");
farenheit.addEventListener("click", convertTempF);
let celsium = document.querySelector("#celsium");
celsium.addEventListener("click", convertTempC);
