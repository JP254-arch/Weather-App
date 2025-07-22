import React from 'react';

const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center max-w-xs">
      <h2 className="text-xl font-bold">{weather.name}</h2>
      <p className="text-gray-600">{weather.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="mx-auto"
      />
      <p className="text-2xl font-bold">{Math.round(weather.main.temp)}°C</p>
    </div>
  );
};

export default WeatherCard;
