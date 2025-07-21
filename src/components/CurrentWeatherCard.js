import React from 'react';

const CurrentWeatherCard = ({ data }) => {
    return (
        <div className="bg-gray-900 rounded-2xl p-6 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
            <div className="text-6xl mb-2">{Math.round(data.main.temp)}°</div>
            <p className="capitalize">{data.weather[0].description}</p>
            <div className="flex justify-around mt-4 text-sm text-gray-400">
                <span>Wind: {data.wind.speed} km/h</span>
                <span>Humidity: {data.main.humidity}%</span>
            </div>
        </div>
    );
};

export default CurrentWeatherCard;
