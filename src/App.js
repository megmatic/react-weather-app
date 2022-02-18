import { WeatherDataProvider } from "./Contexts/WeatherDataContext"
import { LocationDataProvider } from "./Contexts/LocationDataContext"
import Weather from "./Components/Weather"
import WeatherDetails from "./Components/WeatherDetails"
import "./App.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <WeatherDataProvider>
          <LocationDataProvider>
            <Routes>
              <Route path="/" exact element={<Weather />}></Route>
              <Route path="/:key" exact element={<WeatherDetails />}></Route>
            </Routes>
          </LocationDataProvider>
        </WeatherDataProvider>
      </div>
    </Router>
  )
}

export default App
