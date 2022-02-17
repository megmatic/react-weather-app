import { WeatherDataProvider } from "./Contexts/WeatherDataContext"
import Form from "./Components/Form"
import Weather from './Components/Weather'
import "./App.css"


function App() {
  return (
    <div className="App">
      <WeatherDataProvider>
        <Form />
        <Weather />
      </WeatherDataProvider>
    </div>
  )
}

export default App
