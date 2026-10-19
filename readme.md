# Weather App

A lightweight, interactive web application that fetches real-time weather data for any city using the OpenWeatherMap API. It features dynamic background videos that update automatically based on current weather conditions (e.g., rain, snow, clear sky, clouds).

## Features

* **Real-Time Weather Data:** Search for any city to view current temperature, humidity, and weather descriptions.
* **Dynamic Video Backgrounds:** Automatically changes the background video loop depending on the weather condition code returned by the API (Thunderstorm, Drizzle, Rain, Snow, Fog, Clear Sky, Clouds).
* **Error Handling:** Provides instant feedback if a city name is left blank or if an invalid city is entered.
* **Responsive Layout:** Clean form and display card structure designed for modern web browsers.

## Tech Stack

* **HTML5:** Semantic markup with HTML video and form elements.
* **CSS3:** Custom styling (stylesheet referenced via `style.css`).
* **JavaScript (ES6+):** Asynchronous API calls (`fetch`, `async/await`), DOM manipulation, and dynamic event handling.
* **API:** [OpenWeatherMap Current Weather Data API](https://openweathermap.org/current)

## Project Structure

```text
├── index.html       # Main HTML structure and video container
├── style.css        # Visual styling and layout rules
├── script.js        # JavaScript logic for API integration and DOM updates
└── *.mp4            # Background video assets (clearsky.mp4, heavyrain.mp4, etc.)
