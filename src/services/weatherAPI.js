import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Replace with OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = (city) => 
    axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);

export const getForecast = (city) => 
    axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
