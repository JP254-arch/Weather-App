import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CurrentWeatherCard from '../components/CurrentWeatherCard';
import WeeklyForecastCard from '../components/WeeklyForecastCard';
import { getCurrentWeather, getForecast } from '../services/weatherAPI';

const WeatherApp = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [weeklyForecast, setWeeklyForecast] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async (city) => {
        try {
            setError('');
            const weatherRes = await getCurrentWeather(city);
            setCurrentWeather(weatherRes.data);

            const forecastRes = await getForecast(city);
            const dailyData = forecastRes.data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
            setWeeklyForecast(dailyData.map(day => ({
                date: new Date(day.dt_txt).toLocaleDateString('en-GB', { weekday: 'short' }),
                temp: Math.round(day.main.temp)
            })));
        } catch (err) {
            setError('City not found.');
            setCurrentWeather(null);
            setWeeklyForecast([]);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-start p-6">
            <h1 className="text-white text-3xl font-bold my-4">Weather App 🌍</h1>
            <SearchBar onSearch={handleSearch} />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {currentWeather && <CurrentWeatherCard data={currentWeather} />}
            {weeklyForecast.length > 0 && <WeeklyForecastCard forecast={weeklyForecast} />}
        </div>
    );
};

export default WeatherApp;
