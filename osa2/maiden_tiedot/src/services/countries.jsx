import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => {
  return axios.get(`${baseUrl}/all`)
}
const get = (name) => {
  return axios.get(`${baseUrl}/name/${name}`)
  
}

export default { 
  get, getAll
}


