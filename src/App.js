import { LocationDataProvider } from "./Contexts/LocationDataContext"
import Form from "./Components/Form"
import Weather from './Components/Weather'
import "./App.css"


function App() {
  return (
    <div className="App">
      <LocationDataProvider>
        <Form />
        <Weather />
      </LocationDataProvider>
    </div>
  )
}

export default App
