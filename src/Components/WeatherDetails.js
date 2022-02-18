import React, {useContext} from 'react'
import { WeatherDataContext } from '../Contexts/WeatherDataContext'

function WeatherDetails({day}) {
    const { weatherData, getTempMin } = useContext(WeatherDataContext)

    // const sunriseUnix = weatherData.current.sunrise.dt

    const humidity = weatherData && "Humidity: " + weatherData.current.humidity + "%"
    const description = weatherData && weatherData.current.weather[0].description
    const main = weatherData && weatherData.current.weather[0].main
    const windSpeed = weatherData && weatherData.current.wind_speed
    const rain = weatherData && weatherData.daily[0].rain
  return (
    <div className='weather-details-container'>
    <p className='humidity'>{humidity}</p>
    <p className='sunrise'>{description}</p>
    <p className='sunset'>{main}</p>
    <p className='wind'>{windSpeed}</p>
    <p className='rain'>{rain}</p>
    <div className='icon-humidity'>Humidity Icon</div>
    <div className='icon-sunrise'>Sunrise Icon</div>
    <div className='icon-sunset'>Sunset Icon</div>
    <div className='icon-wind'>Wind Icon</div>
    <div className='icon-rain'>Rain Icon</div>
    <div className='icon-uv'>UV Icon</div>
    </div>
  )
}

export default WeatherDetails