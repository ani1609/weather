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
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
            }
            ],
            "base": "stations",
            "main": {
            "temp": 27.01,
            "feels_like": 31.09,
            "temp_min": 27.01,
            "temp_max": 27.01,
            "pressure": 1001,
            "humidity": 93,
            "sea_level": 1001,
            "grnd_level": 1000
            },
            "visibility": 10000,
            "wind": {
            "speed": 4.68,
            "deg": 69,
            "gust": 8.9
            },
            "clouds": {
            "all": 97
            },
            "dt": 1692308485,
            "sys": {
            "type": 1,
            "id": 9114,
            "country": "IN",
            "sunrise": 1692315811,
            "sunset": 1692362125
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
