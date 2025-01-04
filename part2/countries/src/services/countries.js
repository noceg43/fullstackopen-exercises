import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

const getAll = async () => {
  const request = axios.get(baseUrl + 'all')
  // return only the response.data short form
  return request.then(response => response.data)
}


const search = async text => {
  const request = axios.get(baseUrl + 'name/' + text)
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