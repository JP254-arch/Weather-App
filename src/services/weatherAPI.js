import axios from 'axios';

const API_KEY = 'e1f3c9bca6b18c2d79ff2ac262066469'; // Replace with OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = (city) => 
    axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);

export const getForecast = (city) => 
    axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
