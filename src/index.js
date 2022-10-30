function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#desciption");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  iconElement.setAttribute("src", response.data.condition.icon_url);
}

let apiKey = "4f6e636etc17733b801df4o7b14ba35b";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Lisbon&key=4f6e636etc17733b801df4o7b14ba35b&units=metric";
let city = "Lisbon";

axios.get(apiUrl).then(displayTemperature);
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
