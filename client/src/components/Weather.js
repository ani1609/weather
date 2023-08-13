import React, { useEffect, useState } from 'react';
import '../styles/Weather.css';
import axios from 'axios';

function Weather() 
{
    const [cityName, setCityName] = useState('');
    const [isChecked, setIsChecked] = useState(false);


    const fetchWeather = async (cityName) => 
    {
        try
        {
            const response = await axios.get(`http://localhost:3000/api/weather?cityName=${cityName}`);
            console.log(response.data);
        }
        catch (error)
        {
            console.error('Error fetching weather:', error);
        }
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        fetchWeather(cityName);
    }

    const handleInputChange = (e) =>
    {
        setCityName(e.target.value);
    }


    return (
        <div className="weather_parent">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter City Name"
                    value={cityName}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default Weather;
