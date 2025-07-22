import React from 'react';
import './WeatherDisplay.css';

function WeatherDisplay({ weather }) {
  const forecast = [
    { day: 'Mon', icon: '☀️', temp: '28°C' },
    { day: 'Tue', icon: '☁️', temp: '26°C' },
    { day: 'Wed', icon: '🌧️', temp: '24°C' },
    { day: 'Thu', icon: '⛅', temp: '27°C' },
    { day: 'Fri', icon: '☀️', temp: '30°C' },
  ];

  return (
    <div className="weather-display">
      <div className="current-weather">
        <h2>{weather?.name || 'Nairobi'}</h2>
        <div className="temp">{weather?.main?.temp || '27'}°C</div>
        <div className="condition">{weather?.weather?.[0]?.main || 'Sunny'} ☀️</div>
      </div>

      <div className="forecast">
        {forecast.map((item) => (
          <div key={item.day} className="forecast-item">
            <div className="day">{item.day}</div>
            <div className="icon">{item.icon}</div>
            <div className="temp">{item.temp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDisplay;
