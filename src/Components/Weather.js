import Form from "./Form"
import WeatherCardList from "./WeatherCardList"
import Current from './Current'


function Weather() {
  return (
    <div>
      <Form />
      <br />
      <Current />
      <WeatherCardList />
    </div>
  )
}

export default Weather