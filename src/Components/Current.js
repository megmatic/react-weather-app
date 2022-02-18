import React, { useContext } from "react"
import { WeatherDataContext } from "../Contexts/WeatherDataContext"
import { LocationDataContext } from "../Contexts/LocationDataContext"


function Current() {
  const { getCurrentWeather, getCurrentTemp, getCurrentDescription, getIconUrl, weatherData } = useContext(WeatherDataContext)
  const { getLocationName } = useContext(LocationDataContext)
  const currentWeather = weatherData && weatherData.current
  // const sunrise = new Date(currentWeather.sunrise * 1000).toLocaleDateString(undefined, {
  //   hour: "2-digit",
  //   minute: "2-digit"
  // })
  var icon = weatherData && currentWeather.weather[0].icon
  var iconUrl = getIconUrl(icon)

  return (
    <div className="current-container">
      <div className="current">
        <div className="name">{getLocationName()}</div>
        <div className="icon"><img src={iconUrl} /></div>
        <div className="description">{getCurrentDescription()}</div>
        <div className="temp">{getCurrentTemp()}</div>
        <div className="data1"></div>
        <div className="data2"></div>
      </div>

    </div>
  )
}

export default Current
