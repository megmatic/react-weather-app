import { useState, createContext } from "react"

export const WeatherDataContext = createContext()

export function WeatherDataProvider({ children }) {
  const [weatherData, setWeatherData] = useState()
  const [weatherList, setWeatherList] = useState([])

  const getTemp = () => {
    return weatherData && Math.ceil(weatherData.current.temp) + '\u00B0'
  }

  const getTempMin = (day) => {
    return weatherData && Math.ceil(weatherData.daily[day].temp.min) + '\u00B0/ '
  }

  const getTempMax = () => {
    return weatherData && Math.ceil(weatherData.daily[0].temp.max) + '\u00B0/ Feels Like '
  }

  const getFeelsLike = () => {
    return weatherData && Math.ceil(weatherData.current.feels_like) + '\u00B0'
  }

  const getDayName = () => {
    return weatherData && new Date(weatherData.daily[0].dt * 1000).toLocaleDateString(undefined, { weekday: 'long'})
  }

  const getIcon = () => {
    return weatherData && weatherData.current.weather[0].icon
  }

  const getIconUrl = (icon) => {
    return weatherData && `http://openweathermap.org/img/w/${icon}.png`
  }

  const getCurrentWeather = () => {
    return weatherData && weatherData.current
  }

  const getCurrentTemp = () => {
    return weatherData && Math.ceil(weatherData.current.temp) + "\u00B0"
  }

  const getCurrentDescription = () => {
    return weatherData && weatherData.current.weather[0].description
  }

  return (
    <WeatherDataContext.Provider value={{ weatherData, setWeatherData, getTemp, getTempMin, getTempMax, getFeelsLike, getDayName, getIcon, getIconUrl, getCurrentWeather, getCurrentTemp, getCurrentDescription }}>
      {children}
    </WeatherDataContext.Provider>
  )
}