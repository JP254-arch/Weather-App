import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import clickSound from './sounds/click.wav';
import successSound from './sounds/click.wav';
import errorSound from './sounds/click.wav';
import WeatherDisplay from './components/WeatherDisplay';

const API_KEY = 'e1f3c9bca6b18c2d79ff2ac262066469'; // Your real API Key

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [history, setHistory] = useState([]);

  const audio = new Audio(clickSound);
  const successAudio = new Audio(successSound);
  const errorAudio = new Audio(errorSound);

  const playClickSound = () => {
    audio.currentTime = 0;
    audio.play();
  };

  const fetchWeather = async () => {
    if (!city) return;
    playClickSound();
    setIsLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      successAudio.currentTime = 0;
      successAudio.play();
      setWeather(response.data);
      setHistory((prev) => {
        if (!prev.includes(city)) return [...prev, city];
        return prev;
      });
    } catch (err) {
      errorAudio.currentTime = 0;
      errorAudio.play();
      setError('City not found. Please try again.');
      setWeather(null);
    } finally {
      setIsLoading(false);
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const getWeatherIcon = (main) => {
    const icons = {
      Thunderstorm: '⛈️',
      Drizzle: '🌦️',
      Rain: '🌧️',
      Snow: '❄️',
      Clear: '☀️',
      Clouds: '☁️',
      Mist: '🌫️',
      Smoke: '🌫️',
      Haze: '🌫️',
      Dust: '🌪️',
      Fog: '🌫️',
      Sand: '🌪️',
      Ash: '🌋',
      Squall: '🌬️',
      Tornado: '🌪️',
    };
    return icons[main] || '🌈';
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <div className="container">
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>

        <h1>Weather App</h1>
        <div className="input-group">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
          />
          <button onClick={fetchWeather}>🔍 Search</button>
        </div>

        {isLoading && <p className="loading">Loading weather...</p>}
        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather-container animate">
            <h2>
              {weather.name}, {weather.sys.country} {getWeatherIcon(weather.weather[0].main)}
            </h2>
            <p>{weather.weather[0].description}</p>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}

        <WeatherDisplay weather={weather} />

        {history.length > 0 && (
          <div className="history">
            <h3>Recent Searches</h3>
            <ul>
              {history.map((item, idx) => (
                <li key={idx} onClick={() => setCity(item)}>
                  {item}
                </li>
              ))}
            </ul>
            <button className="clear-btn" onClick={clearHistory}>Clear History</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
