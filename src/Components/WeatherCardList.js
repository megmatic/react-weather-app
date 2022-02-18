import React, { useContext} from 'react'
import { WeatherDataContext } from '../Contexts/WeatherDataContext'
import WeatherCard from './WeatherCard'

function WeatherCardList() {
    const { weatherData, getIconUrl } = useContext(WeatherDataContext)


   
  return (
      <div className='weathercardlist-container'>
    <div className='weathercardlist'>
        {weatherData && weatherData.daily.map((day, i) => {
          console.log(i, day)
          return <WeatherCard className='card' key={i} day={day} num={i}/> 
    })}
    </div>
    </div>
  )
}

export default WeatherCardList