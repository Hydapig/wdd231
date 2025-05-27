import { footerData } from "./footer.mjs";
import { menuToggle } from "./navigation.mjs";
import { getCurrentWeather } from "./weather.mjs";
import { getForecast } from "./forecast.mjs";
import { displayRandomCards } from './random-display.mjs';

menuToggle();
footerData();
getCurrentWeather();
getForecast();

document.addEventListener('DOMContentLoaded', () => {
	displayRandomCards();
});