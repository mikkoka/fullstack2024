import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'
const api_key = 'f2486b43ca248ff7830b1988a29b8a35'//import.meta.env.VITE_WEATHER_KEY



const get = (lat, lon) => {
    const req_path = `${baseUrl}lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`
    return axios.get(req_path)
  }

export default { get }