import React from 'react'
import {useContext} from 'react'
import { WeatherDataContext } from '../Contexts/WeatherDataContext'

const WeatherCard = ()=> {
    const { weatherData, getTemp, getTempMin, getTempMax, getFeelsLike, getDayName, getIcon, getIconUrl } = useContext(WeatherDataContext)
    const temp = getTemp()
    const tempMin = getTempMin()
    const tempMax = getTempMax()
    const feelsLike = getFeelsLike()
    const dayName = getDayName()
    const icon = getIcon()
    const iconUrl = getIconUrl(icon)




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