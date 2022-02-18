import React, { useContext} from 'react'
import { WeatherDataContext } from '../Contexts/WeatherDataContext'
import { LocationDataContext } from '../Contexts/LocationDataContext'
import WeatherCard from './WeatherCard'

function WeatherCardList() {
    const { weatherData, getIconUrl } = useContext(WeatherDataContext)
    const { getLocationName} = useContext(LocationDataContext)

   
  return (
      <div className='weathercardlist-container'>
      <p className='locationname'>{getLocationName()}</p>
    <div className='weathercardlist'>
    {weatherData && weatherData.daily.map((day, i) => {
        return <WeatherCard className='card' key={i} day={day}/> 
    })}
    </div>
    </div>
  )
}

export default WeatherCardList