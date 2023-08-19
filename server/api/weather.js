require('dotenv').config();
const axios = require('axios');

const fetchWeather = async (cityName) => 
{
    try 
    {
        const weather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.WEATHER_API_KEY}&units=metric`);
        return weather.data; // Return the weather data to the caller
    } 
    catch (error) 
    {
        console.error('Error fetching weather:', error);
        throw new Error('An error occurred while fetching weather data.');
    }
}

module.exports = async (req, res) => {
    const { cityName } = req.query;
    try {
        const weatherData = await fetchWeather(cityName);
        res.json(weatherData);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching weather data.');
    }
};
