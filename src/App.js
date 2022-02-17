import { WeatherDataProvider } from "./Contexts/WeatherDataContext"
import Form from "./Components/Form"
import WeatherCard from './Components/WeatherCard'
import Weather from "./Components/Weather"
import "./App.css"


function App() {
  return (
    <div className="App">
      <WeatherDataProvider>
        <Form />
        <br/>
        <WeatherCard />
        {/* <Weather /> */}
      </WeatherDataProvider>
    </div>
  )
}

export default App
