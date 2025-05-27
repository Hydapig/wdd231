import { footerData } from "./footer.mjs";
import { menuToggle } from "./navigation.mjs";
import { getCurrentWeather } from "./weather.mjs";
import { getForecast } from "./forecast.mjs";

menuToggle();
footerData();
getCurrentWeather();
getForecast();