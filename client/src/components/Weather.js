import React, { useState, useEffect } from 'react';
import '../styles/Weather.css';
import axios from 'axios';
import { ReactComponent as Cloudy } from '../icons/rain.svg';

function Weather() 
{
    const [cityName, setCityName] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [weatherData, setWeatherData] = useState([]);
    const [locationLoading, setLocationLoading] = useState(false);
    const [weatherLoading, setWeatherLoading] = useState(false);

    const fetchWeather = async (city) => 
    {
        try 
        {
            setWeatherLoading(true);
            const response = await axios.get(`http://localhost:3000/api/weather?cityName=${city}`);
            setWeatherLoading(false);
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
                        setLocationLoading(true);
                        const response = await axios.get(`http://localhost:3000/api/location?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`);
                        console.log(response.data);
                        setCityName(response.data.locality);
                        setLocationLoading(false);
                        fetchWeather(response.data.locality);
                    } 
                    catch (error) 
                    {
                        console.error('Error getting city name:', error);
                    }
                },
                (error) => 
                {
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
            {locationLoading && <p>Fetching current location...</p>}
            {weatherLoading && <p>Fetching weather data...</p>}
        </div>
    );
}

export default Weather;
