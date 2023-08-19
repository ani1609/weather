require('dotenv').config();
const axios = require('axios');

const fetchWeather = async (req, res) => 
{
    const cityName = req.query.cityName;
    try 
    {
        // const weather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.WEATHER_API_KEY}&units=metric`);
        res.send({
            "coord": {
            "lon": 88.6714,
            "lat": 22.3189
            },
            "weather": [
            {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
            }
            ],
            "base": "stations",
            "main": {
            "temp": 28.01,
            "feels_like": 33.78,
            "temp_min": 28.01,
            "temp_max": 28.01,
            "pressure": 1002,
            "humidity": 90,
            "sea_level": 1002,
            "grnd_level": 1002
            },
            "visibility": 10000,
            "wind": {
            "speed": 3.77,
            "deg": 157,
            "gust": 7.74
            },
            "clouds": {
            "all": 81
            },
            "dt": 1692396708,
            "sys": {
            "type": 1,
            "id": 9114,
            "country": "IN",
            "sunrise": 1692402233,
            "sunset": 1692448478
            },
            "timezone": 19800,
            "id": 1274984,
            "name": "Canning",
            "cod": 200
            });
    } 
    catch (error) 
    {
        console.error('Error fetching weather:', error);
        res.status(500).send('An error occurred while fetching weather data.');
    }
}

module.exports = { fetchWeather };
