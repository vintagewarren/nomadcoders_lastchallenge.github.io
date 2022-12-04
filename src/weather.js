const apiKey = "17d3fbc1ae35977564411b6ac77d8830";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metrics`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather div:first-child");
      const weather = document.querySelector("#weather div:nth-child(2)");
      const temperature = document.querySelector("#weather div:last-child");

      city.innerText = `City : ${data.name}`;
      weather.innerText = `Weather : ${data.weather[0].main}`;
      temperature.innerText = `Temp : ${Math.floor(data.main.temp - 273.15)}°C`;
    });
}

function onGeoNg() {
  alert("No location available. No weather information.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoNg);
