import React, { useState, useEffect } from 'react';
import '../styles/Weather.css';
import '../index.css';
import axios from 'axios';
import WeatherIcon from './WeatherIcon';
import { ReactComponent as Location } from '../icons/location.svg';
import { ReactComponent as CurrentLocation } from '../icons/currentLocation.svg';
import { ReactComponent as ArrowUp } from '../icons/arrowUp.svg';
import { ReactComponent as ArrowDown } from '../icons/arrowDown.svg';
// import { ReactComponent as Sun } from '../icons/clearSkyDay.svg';
import Sun from "../images/sun.png";


function Weather() 
{
    const [cityName, setCityName] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    const [locationLoading, setLocationLoading] = useState(false);
    const [weatherLoading, setWeatherLoading] = useState(false);
    const [localTime, setLocalTime] = useState("");
    const [sunriseTime, setSunriseTime] = useState("");
    const [sunsetTime, setSunsetTime] = useState("");
    const [isDay, setIsDay] = useState(false);
    const [windDirection, setWindDirection]=useState("");
    const [daylightPercentageSun, setDaylightPercentageSun] = useState(0);
    const [daylightPercentageBar, setDaylightPercentageBar] = useState(0);


    const fetchWeather = async (city) => 
    {
        try 
        {
            setWeatherLoading(true);
            const response = await axios.get(`https://weather-nluwkbk6m-ani1609.vercel.app/api/weather?cityName=${city}`);
            setWeatherData(response.data);
            if (weatherData)
            {
                const localTime = new Date((response.data.dt * 1000) + (response.data.timezone));
                // console.log(localTime);
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
                        const response = await axios.get(`https://weather-nluwkbk6m-ani1609.vercel.app/api/location?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`);
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

    useEffect (() =>
    {
        if (weatherData.wind?.deg)
        {
            const directions = ["North", "North-east", "East", "South-east", "South ", "South-west", "West", "North-west"];
            const index = Math.round(weatherData.wind.deg / 45) % 8;
            setWindDirection(directions[index]);
        }
    },[weatherData]);


    useEffect(() =>
    {
        if (weatherData.sys?.sunrise)
        {
            const sunriseTime = new Date((weatherData.sys.sunrise * 1000) + (weatherData.timezone));
            setSunriseTime(sunriseTime);
        }
        if (weatherData.sys?.sunset)
        {
            const sunsetTime = new Date((weatherData.sys.sunset * 1000) + (weatherData.timezone));
            setSunsetTime(sunsetTime);
        }
    },[weatherData]);

    useEffect(() =>
    {
        if (localTime && sunriseTime && sunsetTime)
        {
            if (localTime > sunriseTime && localTime < sunsetTime)
            {
                setIsDay(true);
            }
            else
            {
                setIsDay(false);
            }
        }
    },[localTime, sunriseTime, sunsetTime]);

    useEffect(() =>
    {
        if (localTime && sunriseTime && sunsetTime)
        {
            const daylight = sunsetTime - sunriseTime;
            const daylightPercentage = ((localTime - sunriseTime) / daylight) * 100;
            setDaylightPercentageBar(daylightPercentage);
            setDaylightPercentageSun(daylightPercentage+785);
        }
    },[localTime, sunriseTime, sunsetTime]);



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
                    {weatherData.name && (
                        <h1>
                            {weatherData.name}
                            {weatherData.sys?.country ? `, ${weatherData.sys.country}` : ''}
                        </h1>
                    )}
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
                        weatherId={weatherData.weather?.[0]?.id}
                        isDay={isDay}
                    />
                </div>
            </div>

            <div className='sunrise_sunset_container'>
                <h4>SUNRISE & SUNSET</h4>
                <div className='sunrise_sunset_content'>
                    {sunriseTime && (
                        <p>{sunriseTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                    )}
                    <div className='progress_bar'>
                        <div className='progress' style={{ width: `${daylightPercentageBar}%` }}></div>
                    </div>
                    {sunsetTime && (
                        <p>{sunsetTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                    )}
                </div>
            </div>

            <div className='details'>
                <h4>DETAILS</h4>
                <div className='infos'>
                    <div>
                        <p>Pressure</p>
                        {weatherData.main?.pressure ? <h3>{weatherData.main.pressure} hPa</h3> :<h3>0 hPa</h3>}
                    </div>
                    <div>
                        <p>Humidity</p>
                        {weatherData.main?.humidity ? <h3>{weatherData.main.humidity} %</h3> :<h3>0 %</h3>}
                    </div>
                    <div>
                        <p>Visibility</p>
                        {weatherData.visibility ? <h3>{weatherData.visibility} m</h3> :<h3>0 m</h3>}
                    </div>
                    <div>
                        <p>{windDirection} wind</p>
                        {weatherData.wind?.speed ? <h3>{weatherData.wind.speed} km/h</h3> :<h3>0 km/h</h3>}
                    </div>
                    <div>
                        <p>Sea Level</p>
                        {weatherData.main?.sea_level ? <h3>{weatherData.main.sea_level} hPa</h3> :<h3>0 hPa</h3>}
                    </div>
                    <div>
                        <p>Ground Level</p>
                        {weatherData.main?.grnd_level ? <h3>{weatherData.main.grnd_level} hPa</h3> :<h3>0 hPa</h3>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;
