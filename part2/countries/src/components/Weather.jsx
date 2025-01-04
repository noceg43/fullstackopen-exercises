import weatherService from '../services/weather'
import { useState, useEffect } from 'react'

const Weather = ({ city }) => {
  console.log('Weather', city);

  const [weather, setWeather] = useState(null)


  useEffect(() => {
    console.log('fetching weather...')
    weatherService.search(city)
      .then(response => {
        setWeather(response)
      })
  }, [])


  const temperature = weather?.main.temp ?? null;
  const u = `${f}`
  const weatherImage = weather != null ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` : null


  return (
    <div>
      <h3>Weather in {city}</h3>
      <p>temperature {temperature} </p>
      <img src={weatherImage} alt={`Weather icon of ${city}`} />
    </div>
  );
};

export default Weather;
