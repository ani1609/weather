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
            "lon": -0.1257,
            "lat": 51.5085
            },
            "weather": [
            {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
            }
            ],
            "base": "stations",
            "main": {
            "temp": 23.51,
            "feels_like": 23.38,
            "temp_min": 20.95,
            "temp_max": 25.16,
            "pressure": 1017,
            "humidity": 56
            },
            "visibility": 10000,
            "wind": {
            "speed": 7.72,
            "deg": 100
            },
            "clouds": {
            "all": 19
            },
            "dt": 1692286538,
            "sys": {
            "type": 2,
            "id": 2075535,
            "country": "GB",
            "sunrise": 1692247718,
            "sunset": 1692300059
            },
            "timezone": 3600,
            "id": 2643743,
            "name": "London",
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
