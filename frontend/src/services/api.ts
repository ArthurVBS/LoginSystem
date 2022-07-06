import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8090',
})

export const loginSession = async (email: string, password: string) => {
  return api.get(`/user?email=${email}&password=${password}`).catch(e => {
    return null
  })
}

export const signUpSession = async (
  name: string,
  email: string,
  password: string,
) => {
  return api.post('/user', { name, email, password }).catch(e => {
    return null
  })
}
