import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8090',
})

export const createSession = async (email: string, password: string) => {
  return api.get(`/user?email=${email}&password=${password}`).catch(e => {
    return null
  })
}
