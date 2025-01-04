import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

const api_key = import.meta.env.VITE_SOME_KEY




const search = async (city) => {
  const request = axios.get(baseUrl + '?q=' + city + '&appid=' + api_key + '&units=metric')

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
export default { search }