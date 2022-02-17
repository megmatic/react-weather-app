import { useEffect, useState } from "react"
import LocationService from "../services/LocationService";
import WeatherService from "../services/WeatherService";


function Form() {
  const [lat, setLat] = useState()
  const [lng, setLng] = useState()
  const [location, setLocation] = useState("");
  const [locationInfo, setLocationInfo] = useState([]);

  
  async function getForcast() {
    const res = await WeatherService.getForcast(lat, lng)
    setLocationInfo(res.data)
  }
  
  const getGeocode = async () => {
    const res = await LocationService.getGeocode(location)
    setLat(res.data.results[0].geometry.location.lat)
    setLng(res.data.results[0].geometry.location.lng)
  }
  
  useEffect(() => {
    getForcast();
  },[lat,lng])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await getGeocode()
    await getForcast()
    console.log(locationInfo.city.name)
  }

  return (
    <div className="search">
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
