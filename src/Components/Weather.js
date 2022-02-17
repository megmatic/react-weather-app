import React from 'react'
import { useLocationData } from '../Contexts/LocationDataContext'


function Weather() {
  const locationData = useLocationData()
  return (
    <div style={{ color: 'white' }}>
      <p>Today's Forecast:</p>
      <p>{locationData && locationData.list[0].weather[0].description}</p>
    </div>
  )
}

export default Weather