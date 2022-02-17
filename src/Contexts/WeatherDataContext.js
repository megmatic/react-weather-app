import { useState, createContext } from "react"

export const WeatherDataContext = createContext()

export function WeatherDataProvider({ children }) {
  const [weatherData, setWeatherData] = useState()

  return (
    <WeatherDataContext.Provider value={{weatherData, setWeatherData}}>
        {children}
    </WeatherDataContext.Provider>
  )
}