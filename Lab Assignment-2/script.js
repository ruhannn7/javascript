const API_KEY = "8904224721a2cc6485c699221f393c28";
const form = document.querySelector("#form");
const cityInput = document.querySelector("#city");
const weatherDetail = document.querySelector(".info");
const searchHistory = document.querySelector(".historyBtn");
const consoleDisplay = document.querySelector("#console-log");

let cityHistory = JSON.parse(localStorage.getItem("cityHistory")) || [];

function logToUI(message) {
    const p = document.createElement("p");
    p.textContent = message;
    p.style.margin = "2px 0";
    consoleDisplay.appendChild(p);
}

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const searchCity = cityInput.value;
    consoleDisplay.innerHTML = "";
    weatherDetail.innerHTML = "<h3>Weather Info</h3>";
    logToUI("1 Sync Start");
    if (searchCity) {
        await getData(searchCity);
    }
    logToUI("2 Sync End");
});

async function getData(searchCity) {
    if (searchCity) {
        try {
            logToUI("[ASYNC] Start fetching");
            Promise.resolve().then(() => logToUI("3 Promise.then (Microtask)"));
            setTimeout(() => logToUI("4 setTimeout (Macrotask)"), 0);
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}`);
            const data = await res.json();
            if (data.cod === 200) {
                logToUI("(ASYNC) Data received");
                weatherDetail.innerHTML = `
                    <h3>Weather Info</h3>
                    <div class="weather-item"><span>City</span> <span>${data.name}, ${data.sys.country}</span></div>
                    <div class="weather-item"><span>Temp</span> <span>${(data.main.temp - 273.15).toFixed(1)} °C</span></div>
                    <div class="weather-item"><span>Weather</span> <span>${data.weather[0].main}</span></div>
                    <div class="weather-item"><span>Humidity</span> <span>${data.main.humidity}%</span></div>
                    <div class="weather-item"><span>Wind</span> <span>${data.wind.speed} m/s</span></div>
                `;
                if (!cityHistory.includes(searchCity)) {
                    cityHistory.push(searchCity);
                    localStorage.setItem("cityHistory", JSON.stringify(cityHistory));
                    displayHistory();
                }
            } else {
                weatherDetail.innerHTML = `<h3>Weather Info</h3><p style="color:red">City not found</p>`;
            }
        } catch (e) {
            logToUI("Network Error: " + e.message);
        }
    }
}

function displayHistory() {
    searchHistory.innerHTML = "";
    cityHistory.forEach((city) => {
        const btn = document.createElement("button");
        btn.innerText = city;
        btn.className = "history-pill";
        btn.onclick = () => {
            cityInput.value = city;
            form.requestSubmit();
        };
        searchHistory.appendChild(btn);
    });
}

function clearAllHistory() {
    cityHistory = [];
    localStorage.removeItem("cityHistory");
    displayHistory();
    logToUI("System: History cleared.");
}

displayHistory();