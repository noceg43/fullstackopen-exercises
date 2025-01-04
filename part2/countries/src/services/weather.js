import axios from 'axios'
const baseUrl = 'https://samples.openweathermap.org/data/2.5/weather'

const api_key = import.meta.env.VITE_SOME_KEY


const getAll = async () => {
  const request = axios.get(baseUrl + 'all')
  // return only the response.data short form
  return request.then(response => response.data)
}


const search = async city => {
  const request = axios.get(baseUrl + '?q=' + city + '&appid=' + api_key)
  return request.then(response => response.data)
}

/*
export default { 
  getAll: getAll, 
  create: create, 
  update: update 
}
*/
// if the key name matches the content name use the short form
export default { getAll, search }