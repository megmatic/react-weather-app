import { WeatherDataProvider } from "./Contexts/WeatherDataContext"
import Form from "./Components/Form"
import WeatherCard from './Components/WeatherCard'
import "./App.css"


function App() {
  return (
    <div className="App">
      <WeatherDataProvider>
        <Form />
        <br/>
        <WeatherCard />
      </WeatherDataProvider>
    </div>
  )
}

export default App
