import { WeatherDataProvider } from "./Contexts/WeatherDataContext"
import { LocationDataProvider } from "./Contexts/LocationDataContext"
import {useContext} from 'react'
import Form from "./Components/Form"
import WeatherCardList from "./Components/WeatherCardList"
import WeatherCard from './Components/WeatherCard'
import WeatherDetails from "./Components/WeatherDetails"
import Weather from "./Components/Weather"
import "./App.scss"


function App() {
  return (
    <div className="App">
      <WeatherDataProvider>
        <LocationDataProvider>
            <Form />
            <br/>
            <WeatherCardList />
            <WeatherDetails />
          </LocationDataProvider>
      </WeatherDataProvider>
    </div>
  )
}

export default App
