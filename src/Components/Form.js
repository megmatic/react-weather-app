import { useEffect, useState, useRef } from "react"
import LocationService from "../Services/LocationService";
import WeatherService from "../Services/WeatherService";


function Form() {
  const [lat, setLat] = useState()
  const [lng, setLng] = useState()
  const [location, setLocation] = useState("");
  const [locationInfo, setLocationInfo] = useState([]);

  const isInitialMount = useRef(true);
  const isInitialMount1 = useRef(true)
  
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      getForcast();
    }
  },[lng]);

  useEffect(() => {
    if (isInitialMount1.current) {
      isInitialMount1.current = false;
    } else {
      console.log(locationInfo)
    }
  },[locationInfo]);
  
  
  async function getForcast() {
    const res = await WeatherService.getForcast(lat, lng)
    setLocationInfo(res.data)
  }
  
  const getGeocode = async () => {
    const res = await LocationService.getGeocode(location)
    setLat(res.data.results[0].geometry.location.lat)
    setLng(res.data.results[0].geometry.location.lng)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    getGeocode()
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
