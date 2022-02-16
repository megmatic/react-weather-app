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
    <div className="search">
      {/* <form onSubmit={handleSubmit}>
        <input
          className="search"
          type="text"
          placeholder="Add Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </form> */}

      <div className="search-box">
        <button className="btn-search"><i className="fas fa-search"></i></button>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-search"
          placeholder="Type to Search..."
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
        </form>
      </div>
    </div>
  )
}

export default Form
