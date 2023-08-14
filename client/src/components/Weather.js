import React, { useState, useEffect } from 'react';
import '../styles/Weather.css';
import axios from 'axios';
import { ReactComponent as Cloudy } from '../icons/rain.svg';

function Weather() 
{
    const [cityName, setCityName] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [weatherData, setWeatherData] = useState([]);

    const fetchWeather = async (city) => 
    {
        try 
        {
            const response = await axios.get(`http://localhost:3000/api/weather?cityName=${city}`);
            setWeatherData(response.data);
            console.log(response.data);
        } 
        catch (error) 
        {
            console.error('Error fetching weather:', error);
        }
    };

    useEffect(() => 
    {
        if (navigator.geolocation) 
        {
            navigator.geolocation.getCurrentPosition(
                async (position) => 
                {
                    try 
                    {
                        const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
                        if (response.data && response.data.address) {
                        const city = response.data.address.city || response.data.address.town || response.data.address.village;
                        console.log(city);
                        setCityName(city);
                        if (city)
                        {
                            fetchWeather(city);
                        }
                    }
                    } 
                    catch (error) 
                    {
                        console.error('Error getting city name:', error);
                    }
                },
                (error) => {
                console.error('Error getting location:', error);
                }
            );
        } 
        else 
        {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        fetchWeather(cityName);
    };

    const handleInputChange = (e) =>
    {
        setCityName(e.target.value);
    };

    const handleCheckboxChange = (event) => 
    {
        setIsChecked(event.target.checked);
    };

    return (
        <div className="weather_parent">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter City Name"
                    value={cityName}
                    onChange={handleInputChange}
                    required
                />
                <label className="toggle-switch">
                    <input 
                        type="checkbox" 
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <span className="slider"></span>
                </label>
                <button type="submit">Search</button>
            </form>
            {/* <p>{weatherData.main.temp}</p> */}
        </div>
    );
}

export default Weather;
