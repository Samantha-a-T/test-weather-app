function displayTemperature(response){
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humiidityElement = document.querySelector("#humidity");
  humiidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
   windElement.innerHTML = Math.round(response.data.wind.speed);
}


let apiKey = "f09d3949047ab6c9e3bcaf79cf61f619";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(displayTemperature)