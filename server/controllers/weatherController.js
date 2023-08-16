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
            "temp": 28.01,
            "feels_like": 32.76,
            "temp_min": 28.01,
            "temp_max": 28.01,
            "pressure": 1002,
            "humidity": 84,
            "sea_level": 1002,
            "grnd_level": 1001
            },
            "visibility": 10000,
            "wind": {
            "speed": 1.89,
            "deg": 3,
            "gust": 2.33
            },
            "clouds": {
            "all": 100
            },
            "dt": 1692219712,
            "sys": {
            "type": 1,
            "id": 9114,
            "country": "IN",
            "sunrise": 1692229390,
            "sunset": 1692275771
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
