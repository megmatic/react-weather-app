import axios from "axios"
const OPEN_WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/"

class WeatherService {
  getWeatherToday(location) {
    return axios.get(
      `${OPEN_WEATHER_API_BASE_URL}/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_FIRST_API}`
    )
  }

  getWeatherOneCall(lat, lng) {
    return axios.get(
      `${OPEN_WEATHER_API_BASE_URL}onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_WEATHER_FIRST_API}&units=imperial`
    )
  }

  getForcast(lat, lng) {
    return axios.get(
      `${OPEN_WEATHER_API_BASE_URL}forecast?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_WEATHER_FIRST_API}`
    )
  }
}

export default new WeatherService()