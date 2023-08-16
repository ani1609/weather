import React, { useState, useEffect } from 'react';
import '../styles/Weather.css';
import '../index.css';
import axios from 'axios';
import WeatherIcon from './WeatherIcon';
import { ReactComponent as Location } from '../icons/location.svg';
import { ReactComponent as CurrentLocation } from '../icons/currentLocation.svg';
import { ReactComponent as ArrowUp } from '../icons/arrowUp.svg';
import { ReactComponent as ArrowDown } from '../icons/arrowDown.svg';


function Weather() 
{
    const [cityName, setCityName] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    const [locationLoading, setLocationLoading] = useState(false);
    const [weatherLoading, setWeatherLoading] = useState(false);
    const [localTime, setLocalTime] = useState("");


    const fetchWeather = async (city) => 
    {
        try 
        {
            setWeatherLoading(true);
            const response = await axios.get(`http://localhost:3000/api/weather?cityName=${city}`);
            setWeatherData(response.data);
            if (weatherData)
            {
                const localTime = new Date((response.data.dt * 1000) + (response.data.timezone));
                console.log(localTime);
                setLocalTime(localTime);
                setWeatherLoading(false);
            }
        } 
        catch (error) 
        {
            console.error('Error fetching weather:', error);
        }
    };

    const detectCurrentLocation = () =>
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
    };

    useEffect(() =>
    {
        detectCurrentLocation();
    }, []);

    const handleDetectCurrentLocation = () =>
    {
        detectCurrentLocation();
    };

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        console.log(cityName);
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
            {/* <form onSubmit={handleSubmit}>
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
            {weatherLoading && <p>Fetching weather data...</p>} */}

            <div className='header'>
                <div className='header_left'>
                    <Location className='location_icon'/>
                    {weatherData.name && <h1>{weatherData.name}</h1>}
                </div>
                <div className='header_right'>
                    <CurrentLocation className='current_location_icon'  onClick={handleDetectCurrentLocation}/>
                    <h1>°C</h1>
                    <label className="toggle-switch">
                        <input 
                            type="checkbox" 
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <span className="slider"></span>
                    </label>
                    <h1>°F</h1>
                </div>
            </div>

            <div className='temp_and_icon_container'>
                <div className='temp_and_icon_container_left'>
                    <div className='temp_and_icon_container_left_left'>
                        <div className='main_temp'>
                            {weatherData.main?.temp ? 
                                isChecked ? 
                                    (<h1>{Math.round((weatherData.main.temp*1.8)+32)}</h1>)
                                    :
                                    (<h1>{Math.round(weatherData.main.temp)}</h1>)
                            : 
                            <h1>0</h1>}

                            {isChecked ? (<div><h2>°F</h2></div>) : (<div><h2>°C</h2></div>)}
                        </div>
                        <div className='temp_min_max'>
                            <div>
                                <ArrowUp className='arrowUp_icon'/>
                                {weatherData.main?.temp_max ? 
                                    isChecked ?
                                        (<h2>{Math.round((weatherData.main.temp_max*1.8)+32)}</h2>)
                                        :
                                        (<h2>{Math.round(weatherData.main.temp_max)}</h2>)
                                :
                                <h2>0</h2>}
                            </div>
                            <div>
                                <ArrowDown className='arrowDown_icon'/>
                                {weatherData.main?.temp_min ? 
                                    isChecked ?
                                        (<h2>{Math.round((weatherData.main.temp_min*1.8)+32)}</h2>)
                                        :
                                        (<h2>{Math.round(weatherData.main.temp_min)}</h2>)
                                :
                                <h2>0</h2>}
                            </div>
                        </div>
                    </div>
                    
                    <div className='temp_and_icon_container_left_right'>
                        {weatherData.weather?.[0]?.description ? (
                        <h2>{weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1)}</h2>
                        ) : (
                        <h2>NULL</h2>
                        )}

                        {weatherData.main?.feels_like ? 
                            isChecked ?
                                (<h2>Feels like {Math.round((weatherData.main.feels_like*1.8)+32)}</h2>)
                                :
                                (<h2>Feels like {Math.round(weatherData.main.feels_like)}</h2>)
                        :
                        <h2>Feels like 0</h2>}     
                    </div>
                </div>

                <div className='temp_and_icon_container_right'>
                    <WeatherIcon
                        id={weatherData.weather?.[0]?.id}
                    />
                </div>
            </div>
            
        </div>
    );
}

export default Weather;
