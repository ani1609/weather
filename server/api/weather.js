const cors = require('micro-cors')();
const axios = require('axios');

const fetchWeather = async (cityName) => {
  try {
    const weather = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );
    return weather.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw new Error('An error occurred while fetching weather data.');
  }
};

module.exports = cors(fetchWeather);
