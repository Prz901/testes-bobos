import axios from 'axios'

const api = axios.create({
  baseURL: 'http://placegoat.com/',
})

export default api
