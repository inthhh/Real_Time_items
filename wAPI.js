const apiKey = "ece4bde0d12e9e56ab4e4f56187644de";
const cityName = "Seoul";
const units = "metric";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${apiKey}`;

const weatherBox = document.querySelector(".weather-box");
const cityNameEl = document.querySelector(".city-name");
const tempEl = document.querySelector(".temp");
const weatherDescEl = document.querySelector(".weather-desc");
const weatherIconEl = document.querySelector(".weather-icon");

fetch(apiUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    cityNameEl.innerHTML = data.name;
    tempEl.innerHTML = `${Math.round(data.main.temp)}°C`;
    weatherDescEl.innerHTML = data.weather[0].description;

    let iconClass = "";
    if (data.weather[0].id >= 200 && data.weather[0].id < 300) {
      iconClass = "11d";
    } else if (data.weather[0].id >= 300 && data.weather[0].id < 400) {
      iconClass = "10d";
    } else if (data.weather[0].id >= 500 && data.weather[0].id < 600) {
      iconClass = "09d";
    } else if (data.weather[0].id >= 600 && data.weather[0].id < 700) {
      iconClass = "13d";
    } else if (data.weather[0].id >= 700 && data.weather[0].id < 800) {
      iconClass = "50d";
    } else if (data.weather[0].id === 800) {
      iconClass = "01d";
    } else if (data.weather[0].id == 801) {
      iconClass = "02d";
    } else if (data.weather[0].id == 802) {
      iconClass = "03d";
    } else if (data.weather[0].id == 803 && data.weather[0].id < 900) {
      iconClass = "04d";
    }
    weatherIconEl.innerHTML = `<img src='http://openweathermap.org/img/wn/${iconClass}.png'>`;
  });
