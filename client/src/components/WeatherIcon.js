import '../index.css';
import '../styles/WeatherIcon.css';
import { useEffect, useState } from 'react';

import { ReactComponent as ThunderstormWithLightRainDay } from '../icons/thunderstormDayWithLightRain.svg';
import { ReactComponent as ThunderstormWithLightRainNight } from '../icons/thunderstormNightWithLightRain.svg';
import { ReactComponent as ThunderstormWithHeavyRainDay } from '../icons/thunderstormDayWithHeavyRain.svg';
import { ReactComponent as ThunderstormWithHeavyRainNight } from '../icons/thunderstormNightWithHeavyRain.svg';
import { ReactComponent as ThunderstormDay } from '../icons/thunderstormDay.svg';
import { ReactComponent as ThunderstormNight } from '../icons/thunderstormNight.svg';
import { ReactComponent as ThunderstormHeavyDay } from '../icons/thunderstormDayHeavy.svg';
import { ReactComponent as ThunderstormHeavyNight } from '../icons/thunderstormNightHeavy.svg';
import { ReactComponent as ThunderstormDrizzleDay } from '../icons/thunderstormDayDrizzle.svg';
import { ReactComponent as ThunderstormDrizzleNight } from '../icons/thunderstormNightDrizzle.svg';

import { ReactComponent as DrizzleDay } from '../icons/drizzleDay.svg';
import { ReactComponent as DrizzleNight } from '../icons/drizzleNight.svg';
import { ReactComponent as HeavyDrizzleDay } from '../icons/drizzleDayHeavy.svg';
import { ReactComponent as HeavyDrizzleNight } from '../icons/drizzleNightHeavy.svg';

import { ReactComponent as LightRainDay } from '../icons/rainDayCloudy.svg';
import { ReactComponent as LightRainNight } from '../icons/rainNightCloudy.svg';
import { ReactComponent as RainDay } from '../icons/rainDay.svg';
import { ReactComponent as RainNight } from '../icons/rainNight.svg';
import { ReactComponent as RainHailDay } from '../icons/rainHailNight.svg';
import { ReactComponent as RainHailNight } from '../icons/rainHailNight.svg';
import { ReactComponent as HeavyRainDay } from '../icons/rainDayHeavy.svg';
import { ReactComponent as HeavyRainNight } from '../icons/rainNightHeavy.svg';

import { ReactComponent as SnowDay } from '../icons/snowDayCloudy.svg';
import { ReactComponent as SnowNight } from '../icons/snowNightCloudy.svg';
import { ReactComponent as SnowHeavyDay } from '../icons/snowHeavyDay.svg';
import { ReactComponent as SnowHeavyNight } from '../icons/snowHeavyNight.svg';
import { ReactComponent as SleetDay } from '../icons/sleetDay.svg'; 
import { ReactComponent as SleetNight } from '../icons/sleetNight.svg';

import { ReactComponent as DustDay } from '../icons/dustDay.svg';
import { ReactComponent as DustNight } from '../icons/dustNight.svg';
import { ReactComponent as Tornado } from '../icons/tornado.svg';
import { ReactComponent as Mist } from '../icons/mist.svg';
import { ReactComponent as SmokeDay } from '../icons/smokeDay.svg';
import { ReactComponent as SmokeNight } from '../icons/smokeNight.svg';
import { ReactComponent as FogDay } from '../icons/fogDay.svg';
import { ReactComponent as FogNight } from '../icons/fogNight.svg';
import { ReactComponent as HazeDay } from '../icons/hazeDay.svg';
import { ReactComponent as HazeNight } from '../icons/hazeNight.svg';

import { ReactComponent as ClearSkyDay } from '../icons/clearSkyDay.svg'; 
import { ReactComponent as ClearSkyNight } from '../icons/clearSkyNight.svg';

import { ReactComponent as FewCloudsDay } from '../icons/fewCloudsDay.svg';
import { ReactComponent as FewCloudsNight } from '../icons/fewCloudsNight.svg';
import { ReactComponent as ScatteredClouds } from '../icons/scatteredClouds.svg';
import { ReactComponent as OverCastCloudsDay } from '../icons/overcastCloudsDay.svg';
import { ReactComponent as OverCastCloudsNight } from '../icons/overcastCloudsNight.svg';


function WeatherIcon(props) 
{
    const { weatherId, timezone, timestamp, sunsetTimestamp, sunriseTimestamp } = props;
    const [isDay, setIsDay] = useState(true);

    useEffect(() => 
    {
        if (sunsetTimestamp && sunriseTimestamp) 
        {
            const sunriseTime = new Date((sunriseTimestamp * 1000) + timezone);
            const sunsetTime = new Date((sunsetTimestamp * 1000) + timezone);
            const localTime = new Date((timestamp * 1000) + timezone);

            if (localTime > sunriseTime && localTime < sunsetTime) 
            {
                setIsDay(true);
            } 
            else 
            {
                setIsDay(false);
            }
        }
    }, [sunsetTimestamp, sunriseTimestamp, timestamp, timezone]);

    const weatherIcons = 
    {
        200:
        {
            day: <ThunderstormWithLightRainDay className='icon' />,
            night: <ThunderstormWithLightRainNight className='icon' />,
        },
        201:
        {
            day: <ThunderstormWithLightRainDay className='icon' />,
            night: <ThunderstormWithLightRainNight className='icon' />,
        },
        202:
        {
            day: <ThunderstormWithHeavyRainDay className='icon' />,
            night: <ThunderstormWithHeavyRainNight className='icon' />,
        },
        210:
        {
            day: <ThunderstormDay className='icon' />,
            night: <ThunderstormNight className='icon' />,
        },
        211:
        {
            day: <ThunderstormDay className='icon' />,
            night: <ThunderstormNight className='icon' />,
        },
        212:
        {
            day: <ThunderstormHeavyDay className='icon' />,
            night: <ThunderstormHeavyNight className='icon' />,
        },
        221:
        {
            day: <ThunderstormHeavyDay className='icon' />,
            night: <ThunderstormHeavyNight className='icon' />,
        },
        230:
        {
            day: <ThunderstormDrizzleDay className='icon' />,
            night: <ThunderstormDrizzleNight className='icon' />,
        },
        231:
        {
            day: <ThunderstormDrizzleDay className='icon' />,
            night: <ThunderstormDrizzleNight className='icon' />,
        },
        232:
        {
            day: <ThunderstormDrizzleDay className='icon' />,
            night: <ThunderstormDrizzleNight className='icon' />,
        },
        300: 
        {
            day: <DrizzleDay className='icon' />,
            night: <DrizzleNight className='icon' />,
        },
        301: 
        {
            day: <DrizzleDay className='icon' />,
            night: <DrizzleNight className='icon' />,
        },
        302: 
        {
            day: <DrizzleDay className='icon' />,
            night: <DrizzleNight className='icon' />,
        },
        310: 
        {
            day: <DrizzleDay className='icon' />,
            night: <DrizzleNight className='icon' />,
        },
        311: 
        {
            day: <DrizzleDay className='icon' />,
            night: <DrizzleNight className='icon' />,
        },
        312: 
        {
            day: <HeavyDrizzleDay className='icon' />,
            night: <HeavyDrizzleNight className='icon' />,
        },
        313: 
        {
            day: <HeavyDrizzleDay className='icon' />,
            night: <HeavyDrizzleNight className='icon' />,
        },
        314: 
        {
            day: <HeavyDrizzleDay className='icon' />,
            night: <HeavyDrizzleNight className='icon' />,
        },
        321: 
        {
            day: <HeavyDrizzleDay className='icon' />,
            night: <HeavyDrizzleNight className='icon' />,
        },
        500:
        {
            day: <LightRainDay className='icon' />,
            night: <LightRainNight className='icon' />,
        },
        501:
        {
            day: <LightRainDay className='icon' />,
            night: <LightRainNight className='icon' />,
        },
        502:
        {
            day: <RainDay className='icon' />,
            night: <RainNight className='icon' />,
        },
        503:
        {
            day: <RainDay className='icon' />,
            night: <RainNight className='icon' />,
        },
        504:
        {
            day: <RainDay className='icon' />,
            night: <RainNight className='icon' />,
        },
        511:
        {
            day: <RainHailDay className='icon' />,
            night: <RainHailNight className='icon' />,
        },
        520:
        {
            day: <HeavyRainDay className='icon' />,
            night: <HeavyRainNight className='icon' />,
        },
        521:
        {
            day: <HeavyRainDay className='icon' />,
            night: <HeavyRainNight className='icon' />,
        },
        522:
        {
            day: <HeavyRainDay className='icon' />,
            night: <HeavyRainNight className='icon' />,
        },
        531:
        {
            day: <HeavyRainDay className='icon' />,
            night: <HeavyRainNight className='icon' />,
        },
        600:
        {
            day: <SnowDay className='icon' />,
            night: <SnowNight className='icon' />,
        },
        601:
        {
            day: <SnowDay className='icon' />,
            night: <SnowNight className='icon' />,
        },
        602:
        {
            day: <SnowHeavyDay className='icon' />,
            night: <SnowHeavyNight className='icon' />,
        },
        611:
        {
            day: <SleetDay className='icon' />,
            night: <SleetNight className='icon' />,
        },
        612:
        {
            day: <SleetDay className='icon' />,
            night: <SleetNight className='icon' />,
        },
        613:
        {
            day: <SleetDay className='icon' />,
            night: <SleetNight className='icon' />,
        },
        615:
        {
            day: <SleetDay className='icon' />,
            night: <SleetNight className='icon' />,
        },
        616:
        {
            day: <SleetDay className='icon' />,
            night: <SleetNight className='icon' />,
        },
        620:
        {
            day: <SleetDay className='icon' />,
            night: <SleetNight className='icon' />,
        },
        621:
        {
            day: <SleetDay className='icon' />,
            night: <SleetNight className='icon' />,
        },
        622:
        {
            day: <SleetDay className='icon' />,
            night: <SleetNight className='icon' />,
        },
        701:
        {
            day: <Mist className='icon' />,
            night: <Mist className='icon' />,
        },
        711:
        {
            day: <SmokeDay className='icon' />,
            night: <SmokeNight className='icon' />,
        },
        721:
        {
            day: <HazeDay className='icon' />,
            night: <HazeNight className='icon' />,
        },
        731: 
        {
            day: <DustDay className='icon' />,
            night: <DustNight className='icon' />,
        },
        741:
        {
            day: <FogDay className='icon' />,
            night: <FogNight className='icon' />,
        },
        751:
        {
            day: <DustDay className='icon' />,
            night: <DustNight className='icon' />,
        },
        761: 
        {
            day: <DustDay className='icon' />,
            night: <DustNight className='icon' />,
        },
        762:
        {
            day: <Mist className='icon' />,
            night: <Mist className='icon' />,
        },
        771:
        {
            day: <Mist className='icon' />,
            night: <Mist className='icon' />,
        },
        781:
        {
            day: <Tornado className='icon' />,
            night: <Tornado className='icon' />,
        },
        800: 
        {
            day: <ClearSkyDay className='icon' />,
            night: <ClearSkyNight className='icon' />,
        },
        801:
        {
            day: <FewCloudsDay className='icon' />,
            night: <FewCloudsNight className='icon' />,
        },
        802:
        {
            day: <ScatteredClouds className='icon' />,
            night: <ScatteredClouds className='icon' />,
        },
        803:
        {
            day: <OverCastCloudsDay className='icon' />,
            night: <OverCastCloudsNight className='icon' />,
        },
        804:
        {
            day: <OverCastCloudsDay className='icon' />,
            night: <OverCastCloudsNight className='icon' />,
        },
    };
    

    return (
        <div className="weather_icon_parent">
            {isDay ? weatherIcons[weatherId]?.day : weatherIcons[weatherId]?.night}
        </div>
    );
}

export default WeatherIcon;
