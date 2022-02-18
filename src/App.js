import { WeatherDataProvider } from "./Contexts/WeatherDataContext"
import { LocationDataProvider } from "./Contexts/LocationDataContext"
import {useContext} from 'react'
import Form from "./Components/Form"
import WeatherCardList from "./Components/WeatherCardList"
import WeatherCard from './Components/WeatherCard'
import Weather from "./Components/Weather"
import "./App.css"


function App() {
  return (
    <div className="App">
      <WeatherDataProvider>
        <LocationDataProvider>
            <Form />
            <br/>
            <WeatherCardList />
          </LocationDataProvider>
      </WeatherDataProvider>
    </div>
  )
}

export default App
