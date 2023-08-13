require('dotenv').config();

const axios = require('axios');

const fetchWeather = async (req, res) => 
{
    const cityName = req.query.cityName;
    try 
    {
        const weather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}&units=metric`);
        res.send(weather.data);
    } 
    catch (error) 
    {
        console.error('Error fetching weather:', error);
        res.status(500).send('An error occurred while fetching weather data.');
    }
}

module.exports = { fetchWeather };
