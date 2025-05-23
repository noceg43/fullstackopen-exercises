import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useCountry } from './hooks/CountryHook'

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}



const Country = ({ country }) => {
  if (country.value) {
    if (country.value.type === 'error') {
      return (
        <div>
          {country.value.content}
        </div>
      )
    } else if (country.value.type === 'success') {

      return (
        <div>
          <h3>{country.value.content.name.common}</h3>
          <div>capital {country.value.content.capital}</div>
          <div>population {country.value.content.population}</div>
          <img src={country.value.content.flags.png} alt="flag" width="200" />

        </div>
      )
    }
  }

  return null
}

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry()
  useEffect(() => {
    if (name) {
      country.fetchCountry(name)
    }
  }, [name])


  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App