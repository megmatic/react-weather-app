import {useContext} from 'react'
import { WeatherDataContext } from '../Contexts/WeatherDataContext'

function Weather() {
  const { weatherData } = useContext(WeatherDataContext)
  return (
    <div style={{ color: 'white' }}>
      <p>Today's Forecast:</p>
      <p>{weatherData && weatherData.daily[0].weather[0].description}</p>
    </div>
  )
}

export default Weather