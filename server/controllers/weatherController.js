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
            "lon": 4.8897,
            "lat": 52.374
            },
            "weather": [
            {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
            }
            ],
            "base": "stations",
            "main": {
            "temp": 20.5,
            "feels_like": 25.55,
            "temp_min": 19.33,
            "temp_max": 21.62,
            "pressure": 1014,
            "humidity": 83
            },
            "visibility": 10000,
            "wind": {
            "speed": 5.14,
            "deg": 240
            },
            "clouds": {
            "all": 75
            },
            "dt": 1692143930,
            "sys": {
            "type": 2,
            "id": 2012552,
            "country": "NL",
            "sunrise": 1692073368,
            "sunset": 1692126448
            },
            "timezone": 19800,
            "id": 2759794,
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
