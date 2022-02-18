import React from "react"
import { useContext } from "react"
import { WeatherDataContext } from "../Contexts/WeatherDataContext"
import { Link, useNavigate } from "react-router-dom"

const WeatherCard = ({ day, num }) => {
  const { getIconUrl } = useContext(WeatherDataContext)
  var temp = Math.ceil(day.temp.day) + "\u00B0"
  var tempMin = Math.ceil(day.temp.min) + "\u00B0/ "
  var tempMax = Math.ceil(day.temp.max) + "\u00B0"
  // var feelsLike = Math.ceil(weatherData.current.feels_like) + '\u00B0'
  var dayName = new Date(day.dt * 1000).toLocaleDateString(undefined, {
    weekday: "long",
  })
  var icon = day.weather[0].icon
  var iconUrl = getIconUrl(icon)
  const navigate = useNavigate()

    const handleClick = () => {
      navigate(`/${num}`);
  }

  return (
    <div className="weathercard-container" onClick={handleClick}>
      <div className="weathercard">
        <p className="day">{dayName}</p>
        <p className="icon">
          <img src={iconUrl} />
        </p>
        <p className="temp">{temp}</p>
      </div>
    </div>
  )
}

export default WeatherCard

