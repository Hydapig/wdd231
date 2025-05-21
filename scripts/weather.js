const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75079698735013&lon=6.640187606913426&units=imperial&appid=39554eabf917026477c231c9828e73e5"

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error:", error);
    } 
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0]}`;
  let desc = data.weather[0].______;
  weatherIcon.setAttribute('___', _____);
  weatherIcon.setAttribute('___', _____);
  captionDesc.textContent = `${desc}`;
}

displayResults();