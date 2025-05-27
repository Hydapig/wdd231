const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const description = document.querySelector('#description');
const highTemp = document.querySelector('#high-temp');
const lowTemp = document.querySelector('#low-temp');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

const myKey = "39554eabf917026477c231c9828e73e5";
const lat = "41.634243793106386";
const long = "-111.85221717749734";
const currentWeather = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${myKey}&units=imperial`

export async function getCurrentWeather() {
    try {
        const response = await fetch(currentWeather);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error:", error);
    } 
}

function displayWeather(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    currentTemp.innerHTML = `${Math.ceil(data.main.temp)}&deg; F`;
    let desc = data.weather[0].description;
    description.innerHTML = `${desc}`;

    highTemp.innerHTML = `High: ${Math.ceil(data.main.temp_max)}&deg;`;
    lowTemp.innerHTML = `Low: ${Math.ceil(data.main.temp_min)}&deg;`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;

    const localSunrise = new Date((data.sys.sunrise) * 1000);
    const localSunset = new Date((data.sys.sunset) * 1000);

    const formattedSunrise = localSunrise.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
    const formattedSunset = localSunset.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    sunrise.innerHTML = `Sunrise: ${formattedSunrise}`;
    sunset.innerHTML = `Sunset: ${formattedSunset}`;
}


