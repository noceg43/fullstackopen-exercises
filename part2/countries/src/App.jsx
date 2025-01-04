import { useState, useEffect, Component } from 'react'
import countriesService from './services/countries'
import Country from './components/Country'
import CountryLine from './components/CountryLine'

const CountriesList = ({ list}) => {
  console.log('CountriesList',list);
  
  if (list.length == 0) {
    return null
  }

  return list.map((c) => <CountryLine key={c.cca2} country = {c}></CountryLine>)
}


function App() {
  const [countries, setCountries] = useState([])
  const [searchText, setSearchText] = useState('')


  useEffect(() => {
    console.log('effect run, countries is now', countries)

      console.log('fetching countries...')
      countriesService.getAll()
        .then(response => {
          setCountries(response)
        })
  }, [])

  const handleSearchTextChange = (event) => {
    console.log(event.target.value)
    setSearchText(event.target.value)
  }


  const countriesFounded = 
    (searchText.split() == '') ? [] :
    countries.filter((c) => c.name.common.toLowerCase().includes(searchText.toLowerCase()))
  
  console.log(countriesFounded);
  
  return (
    <>
      <p>find countries <input value={searchText} onChange={handleSearchTextChange}/> </p>

      <div>{(countriesFounded.length == 0) ? null : 
        (countriesFounded.length > 10) ? 
          'Too many matches, specify another filter' : 
          (countriesFounded.length == 1) ? 
            <Country country={countriesFounded[0]} ></Country> :
            <CountriesList list={countriesFounded} ></CountriesList>} 
      </div>
    </>
  )
}

export default App
