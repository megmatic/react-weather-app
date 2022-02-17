import { useState, createContext } from "react"

export const WeatherDataContext = createContext()

export function WeatherDataProvider({ children }) {
  const [weatherData, setWeatherData] = useState()

  const getTemp = () => {
    return weatherData && Math.ceil(weatherData.current.temp) + '\u00B0'
  }

  const getTempMin = () => {
    return weatherData && Math.ceil(weatherData.daily[0].temp.min) + '\u00B0/ '
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
    return `http://openweathermap.org/img/w/${icon}.png`
  }

  return (
    <WeatherDataContext.Provider value={{ weatherData, setWeatherData, getTemp, getTempMin, getTempMax, getFeelsLike, getDayName, getIcon, getIconUrl }}>
      {children}
    </WeatherDataContext.Provider>
  )
}