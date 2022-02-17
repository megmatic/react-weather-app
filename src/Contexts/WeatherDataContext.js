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

// import { useState, useContext, createContext } from "react"

// const WeatherDataContext = createContext()
// const WeatherDataUpdateContext = createContext()

// export function useWeatherData() {
//   return useContext(WeatherDataContext)
// }

// export function useWeatherDataUpdate() {
//   return useContext(WeatherDataUpdateContext)
// }

// export function WeatherDataProvider({ children }) {
//   const [weatherData, setWeatherData] = useState()

//   return (
//     <WeatherDataContext.Provider value={weatherData}>
//       <WeatherDataUpdateContext.Provider value={setWeatherData}>
//         {children}
//       </WeatherDataUpdateContext.Provider>
//     </WeatherDataContext.Provider>
//   )
// }