function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0];
  iconElement.setAttribute =
    ("src",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.weather[0].icon}.png");
}

let apiKey = "4f6e636etc17733b801df4o7b14ba35b";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Lisbon&key=4f6e636etc17733b801df4o7b14ba35b&units=metric";
let city = "Lisbon";

axios.get(url).then(displayTemperature);
