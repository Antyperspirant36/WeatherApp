import { getCurrentWeather } from "./getCurrentWeather.js";
const iconElement = document.getElementById("insertSvg");
const currentTemp = document.getElementById("currentTemp");
const data = await getCurrentWeather("Rydułtowy");
iconElement.innerHTML = `<img src="../icons/${data.weather[0].icon}.png" alt="Weather Icon" style="max-width: 100px;" class="m-auto">`;
currentTemp.innerHTML = data.main.temp + "°C";