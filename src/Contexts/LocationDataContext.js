import { useState, createContext } from "react"

export const LocationDataContext = createContext()

export function LocationDataProvider({ children }) {
  const [locationData, setLocationData] = useState()

  const getLocationName = () => {
    return locationData && locationData.results[0].formatted_address
  }

  return (
    <LocationDataContext.Provider value={{ locationData, setLocationData, getLocationName}}>
      {children}
    </LocationDataContext.Provider>
  )
}
