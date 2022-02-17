import axios from "axios"
const GEOLOCATOR_API_BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?"

class LocationService {
  getGeocode(location) {
    return axios.get(`${GEOLOCATOR_API_BASE_URL}address=${location}&key=${process.env.REACT_APP_GEOCODER_API}`)
  }
}

export default new LocationService()