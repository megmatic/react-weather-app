import { useState, useContext, createContext } from "react"

const LocationDataContext = createContext()
const LocationDataUpdateContext = createContext()

export function useLocationData() {
  return useContext(LocationDataContext)
}

export function useLocationDataUpdate() {
  return useContext(LocationDataUpdateContext)
}

export function LocationDataProvider({ children }) {
  const [locationData, setLocationData] = useState()

  return (
    <LocationDataContext.Provider value={locationData}>
      <LocationDataUpdateContext.Provider value={setLocationData}>
        {children}
      </LocationDataUpdateContext.Provider>
    </LocationDataContext.Provider>
  )
}