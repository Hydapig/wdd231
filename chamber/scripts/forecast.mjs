const currentDay = document.querySelector('#current-day');
const secondDay = document.querySelector('#second-day');
const thirdDay = document.querySelector('#third-day');

const myKey = "39554eabf917026477c231c9828e73e5";
const lat = "41.634243793106386";
const long = "-111.85221717749734";
const forecast = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${myKey}&units=imperial`

export async function getForecast() {
    try {
        const response = await fetch(forecast);
        if (response.ok) {
            const data = await response.json();
            console.log(data);

            const dailyTemps = {};

            const todayDate = new Date().toISOString().split('T')[0];

            data.list.forEach(entry => {
                const date = new Date(entry.dt * 1000).toISOString().split('T')[0];

                // Skip today
                if (date === todayDate) return;

                if (!dailyTemps[date]) {
                    dailyTemps[date] = {
                        min: entry.main.temp_min,
                        max: entry.main.temp_max
                    };
                } else {
                    dailyTemps[date].min = Math.min(dailyTemps[date].min, entry.main.temp_min);
                    dailyTemps[date].max = Math.max(dailyTemps[date].max, entry.main.temp_max);
                }
            });

            const forecast = Object.entries(dailyTemps)
                .slice(0, 3)
                .map(([dateStr, temps]) => {
                    const date = new Date(dateStr);
                    return {
                        day: date.toLocaleDateString('en-US', { weekday: 'long' }),
                        min: Math.round(temps.min),
                        max: Math.round(temps.max)
                    };
                });

            displayForecast(forecast);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error:", error);
    }
}


function displayForecast(forecast) {
    const currentDay = document.querySelector('#current-day');
    const secondDay = document.querySelector('#second-day');
    const thirdDay = document.querySelector('#third-day');

    const dayElements = [currentDay, secondDay, thirdDay];

    forecast.forEach((day, index) => {
        if (dayElements[index]) {
            dayElements[index].textContent = `${day.day}: ${day.max} / ${day.min}°F`;
        }
    });
}

