import { useEffect, useState, useRef, useContext } from "react";
import LocationService from "../Services/LocationService";
import WeatherService from "../Services/WeatherService";
import { WeatherDataContext } from '../Contexts/WeatherDataContext'
import { LocationDataContext } from "../Contexts/LocationDataContext";

function Form() {
  const [lat, setLat] = useState()
  const [lng, setLng] = useState()
  const [location, setLocation] = useState("");
  const { weatherData, setWeatherData } = useContext(WeatherDataContext)
  const { setLocationData } = useContext(LocationDataContext)
  const { setWeatherList } = useContext(WeatherDataContext)

  const isInitialMount = useRef(true);
  const isInitialMount1 = useRef(true)
  
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      getWeatherData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[lng]);

  useEffect(() => {
    if (isInitialMount1.current) {
      isInitialMount1.current = false;
    } else {
      console.log(weatherData)
      console.log(weatherData.daily[0].weather[0].description)
    }
  },[weatherData]);
  
  async function getWeatherData() {
    const res = await WeatherService.getWeatherOneCall(lat, lng)
    setWeatherData(res.data)
  }
  
  const getGeocode = async () => {
    const res = await LocationService.getGeocode(location)
    setLocationData(res.data)
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
