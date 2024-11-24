// Function to fetch the weather from the backend
function fetchWeather() {
    const city = document.getElementById("city").value.trim();
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    fetch(`/weather?city=${city}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById("weather-info").innerHTML = `<p>Error: ${data.error}</p>`;
            } else {
                const weatherInfo = `
                    <p><strong>City:</strong> ${data.name}</p>
                    <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                `;
                document.getElementById("weather-info").innerHTML = weatherInfo;
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById("weather-info").innerHTML = `<p>Error: Unable to fetch weather data.</p>`;
        });
}
