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
            "lon": 2.3488,
            "lat": 48.8534
            },
            "weather": [
            {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
            }
            ],
            "base": "stations",
            "main": {
            "temp": 23.47,
            "feels_like": 23.67,
            "temp_min": 21.67,
            "temp_max": 24.28,
            "pressure": 1015,
            "humidity": 69
            },
            "visibility": 10000,
            "wind": {
            "speed": 4.12,
            "deg": 50
            },
            "clouds": {
            "all": 0
            },
            "dt": 1692305069,
            "sys": {
            "type": 2,
            "id": 2041230,
            "country": "FR",
            "sunrise": 1692247536,
            "sunset": 1692299053
            },
            "timezone": 7200,
            "id": 2988507,
            "name": "Paris",
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
