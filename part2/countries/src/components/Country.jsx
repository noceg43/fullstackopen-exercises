import Weather from './Weather'

const Country = ({ country }) => {
    console.log('Country', country);
  
    const name = country.name.common;
    const capital = country.capital[0];
    const area = country.area;
    const languages = Object.values(country.languages);
    const flag = country.flags.png;
  
    return (
      <div>
        <h3>{name}</h3>
        <p>Capital: {capital}</p>
        <p>Area: {area}</p>
        <b>Languages:</b>
        <ul>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={flag} alt={`Flag of ${name}`} />
        <Weather city = {capital} ></Weather>
      </div>
    );
  };
  
  export default Country;
  