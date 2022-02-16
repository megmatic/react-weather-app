import { useState } from "react"
import axios from "axios"

function Form() {
  const [lat, setLat] = useState("")
  const [long, setLong] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(lat, long)
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_FIRST_API}`
      )
      .then((res) => {
        console.log(res.data)
      })
  }

  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Latitude</label>
          <input
            type="text"
            placeholder="Add latitude"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Longitude</label>
          <input
            type="text"
            placeholder="Add Location"
            value={long}
            onChange={(e) => setLong(e.target.value)}
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-block" />
      </form>
    </div>
  )
}

export default Form
