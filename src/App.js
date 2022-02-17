import { WeatherDataProvider } from "./Contexts/WeatherDataContext"
import { LocationDataProvider } from "./Contexts/LocationDataContext"
import Form from "./Components/Form"
import WeatherCard from './Components/WeatherCard'
import Weather from "./Components/Weather"
import "./App.css"


function App() {
  return (
    <div className="App">
      <WeatherDataProvider>
        <LocationDataProvider>
            <Form />
            <WeatherCard />
          </LocationDataProvider>
      </WeatherDataProvider>
    </div>
  )
}

export default App
