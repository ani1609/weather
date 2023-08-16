import '../index.css';
import '../styles/WeatherIcon.css';
import { ReactComponent as ClearSkyDay } from '../icons/clearSkyDay.svg'; 


function WeatherIcon(props)
{
    const {weatherId} = props;

    const weatherIcons = 
    {
        800: <ClearSkyDay className='icon' />,
    };

    return (
        <div className="weather_icon_parent">
            <ClearSkyDay className='icon'/>
        </div>
    );
}

export default WeatherIcon;