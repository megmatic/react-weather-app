import React from 'react'
import {useContext} from 'react'
import { WeatherDataContext } from '../Contexts/WeatherDataContext'

const WeatherCard = ()=> {
    const { weatherData } = useContext(WeatherDataContext)
    const temp = weatherData && Math.ceil(weatherData.current.temp) + '\u00B0';
    const tempMin = weatherData && Math.ceil(weatherData.daily[0].temp.min) + '\u00B0/ ';
    const tempMax = weatherData && Math.ceil(weatherData.daily[0].temp.max) + '\u00B0/ Feels Like ';
    const feelsLike = weatherData && Math.ceil(weatherData.current.feels_like) + '\u00B0';
    const dayName = weatherData && new Date(weatherData.daily[0].dt * 1000).toLocaleDateString(undefined, { weekday: 'long'});
    const icon = weatherData && weatherData.current.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${icon}.png`




    return (
        <div className='weathercard-container'>
            <div className='weathercard'>
                <p className='temp'>{temp}</p>
                <p className='temp-string'>{tempMin && (tempMin + tempMax + feelsLike)}</p>
                <p className='day'>{dayName}</p>
                <p className='icon'><img src={iconUrl}  /></p>
            </div>           
        </div>
    )
}

export default WeatherCard