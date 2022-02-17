import React from 'react'
import { useWeatherData } from '../Contexts/WeatherDataContext'

function Weather() {
  const weatherData = useWeatherData()
  return (
    <div style={{ color: 'white' }}>
      <p>Today's Forecast:</p>
      <p>{weatherData && weatherData.daily[0].weather[0].description}</p>
    </div>
  )
}

export default Weather