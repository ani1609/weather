const cors = require('micro-cors')();
const axios = require('axios');

const fetchWeather = async ({ query: { cityName } }, res) => {
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.WEATHER_API_KEY}&units=metric`);
    const weatherData = response.data;
    res.json(weatherData);
  } catch (error) {
    console.error('Error fetching weather:', error);
    res.status(500).json({ error: 'An error occurred while fetching weather data.' });
  }
};

module.exports = cors(fetchWeather);
