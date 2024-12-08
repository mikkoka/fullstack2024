import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}
const get = (id) => {
  return axios.get(`${baseUrl}/${id}`)
  .then(function (response) {
    return response.data
  })
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const deleteEntry = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

export default { 
  get, getAll, create, update, deleteEntry 
}