import weatherService from '../services/weather'

const Weather = ({ city }) => {
    console.log('Weather', city);
  
      const [weather, setWeather] = useState([])
    
    
      useEffect(() => {    
          console.log('fetching weather...')
          weatherService.getAll()
            .then(response => {
              setWeather(response)
            })
      }, [])


    const temperature = weather.main.temp;

    const weatherImage = 'https://openweathermap.org/img/wn/' + weather.weather.icon + '@2x.png'
    
  
    return (
      <div>
        <h3>Weather in {city}</h3>
        <p>temperature {temperature} </p>
        <img src={weatherImage} alt={`Weather icon of ${city}`} />
      </div>
    );
  };
  
  export default Weather;
  