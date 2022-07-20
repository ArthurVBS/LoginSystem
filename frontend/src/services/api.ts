import axios from 'axios'
import { BASE_URL } from '../utils/env_sample'

export const api = axios.create({
  baseURL: BASE_URL,
})

export const loginSession = async (email: string, password: string) => {
  return api.get(`/user?email=${email}&password=${password}`).catch(e => {
    return e.response
  })
}

export const signUpSession = async (
  name: string,
  email: string,
  password: string,
) => {
  return api.post('/user', { name, email, password }).catch(e => {
    return e.response
  })
}
