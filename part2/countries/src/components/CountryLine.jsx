import { useState } from 'react'
import Country from './Country'


const CountryLine = ({ country }) => {

    const [show, setShow] = useState(false)

    console.log('CountryLine', country);
  
    const name = country.name.common;
  
    return (
      <div>
        {name}<button type="button" onClick={() => {
            setShow(!show)
        }} >show</button>
        {show ? <Country country ={country}></Country> : null}
      </div>
    );
  };
  
  export default CountryLine;
  