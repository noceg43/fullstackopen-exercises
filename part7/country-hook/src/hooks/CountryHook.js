import { useState } from 'react'

import axios from 'axios'

const url = 'https://studies.cs.helsinki.fi/restcountries/api/name/'

const urlForCountry = (country) => {
    return `${url}${country}`
}

const errorValue = (content) => {
    return {
        type: 'error',
        content: content
    }
}

const successValue = (content) => {
    return {
        type: 'success',
        content: content
    }
}


export const useCountry = () => {

    const [value, setValue] = useState(null)

    const fetchCountry = async (country) => {
        try {
            const response = await axios.get(urlForCountry(country))
            const data = response.data
            if (data.error || data.status === 404) {
                setValue(errorValue("not found..."))
                return
            } else {
                setValue(successValue(data))
            }
        } catch (error) {
            setValue(errorValue("not available..."))
        }
    }

    return {
        value,
        fetchCountry
    }
}