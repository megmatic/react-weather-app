import { useState } from "react"
import axios from "axios"

function Form() {
  const [lat, setLat] = useState()
  const [long, setLong] = useState()
  const [location, setLocation] = useState("");
  const [locationInfo, setLocationInfo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.REACT_APP_GEOCODER_API}`
      )
      .then((res) => {

        var latitude = res.data.results[0].geometry.location.lat
        var longitude = res.data.results[0].geometry.location.lng
        setLat(latitude)
        setLong(longitude)
      })



    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_FIRST_API}`
      )
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Location</label>
          <input
            type="text"
            placeholder="Add Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-block" />
      </form>
    </div>
  )
}

export default Form
