import React from 'react'
import {useContext} from 'react'
import { WeatherDataContext } from '../Contexts/WeatherDataContext'


const WeatherCard = ({day, key})=> {
    const { getIconUrl } = useContext(WeatherDataContext)
    var temp = Math.ceil(day.temp.day) + '\u00B0'
    var tempMin = Math.ceil(day.temp.min) + '\u00B0/ '
    var tempMax = Math.ceil(day.temp.max) + '\u00B0'
    // var feelsLike = Math.ceil(weatherData.current.feels_like) + '\u00B0'
    var dayName = new Date(day.dt * 1000).toLocaleDateString(undefined, { weekday: 'long'})
    var icon = day.weather[0].icon
    var iconUrl = getIconUrl(icon)
    
    const handleOnClick = () => {
        
    }




    return (
        <div className='weathercard-container' onClick={handleOnClick}>
            <div className='weathercard'>
                <p className='day'>{dayName}</p>
                <p className='icon'><img src={iconUrl}  /></p>
                <p className='temp'>{temp}</p>
            </div>           
        </div>
    )
}

export default WeatherCard