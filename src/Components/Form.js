import { useState } from "react"
import LocationService from "../services/LocationService";
import WeatherService from "../services/WeatherService";

function Form() {
  const [lat, setLat] = useState()
  const [lng, setLng] = useState()
  const [location, setLocation] = useState("");
  const [locationInfo, setLocationInfo] = useState('')

  const getGeocode = async () => {
    const res = await LocationService.getGeocode(location)
    const latitude = res.data.results[0].geometry.location.lat
    const longitude = res.data.results[0].geometry.location.lng
    setLat(latitude)
    setLng(longitude)
    console.log(latitude, longitude, lat, lng)
  }

  const getForcast = async () => {
    const res = await WeatherService.getForcast(lat, lng)
    console.log(res.data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await getGeocode()
    await getForcast()
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
