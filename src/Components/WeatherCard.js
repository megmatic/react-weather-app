import React from 'react'
import { useWeatherData } from '../Contexts/WeatherDataContext'

const WeatherCard = ()=> {
    const weatherData = useWeatherData();
    const temp = weatherData && Math.ceil(weatherData.current.temp) + '*';
    const tempMin = weatherData && Math.ceil(weatherData.daily[0].temp.min) + '*';
    const tempMax = weatherData && Math.ceil(weatherData.daily[0].temp.max) + '*';
    const feelsLike = weatherData && Math.ceil(weatherData.current.feels_like) + '*';
    const dayName = new Date(weatherData.daily[0].dt * 1000).toLocaleDateString(undefined, { weekday: 'long'});




    return (
        <div className='weathercard-container'>
            <div className='weathercard'>
                <p className='temp'>{temp}</p>
                <p className='temp-min'>{tempMin}</p>
                <p className='temp-max'>{tempMax}</p>
                <p className='temp-feelslike'>{feelsLike}</p>
                <p>{dayName}</p>
            </div>           
        </div>
    )
}

export default WeatherCard