import { createContext, ReactNode, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginSession } from '../services/api'
import usePersistedState from '../utils/usePersistedState'

interface IUserType {
  authenticated: boolean
  id: string
  email: string
  name: string
}

type IErrPopUp = React.Dispatch<
  React.SetStateAction<{
    show: boolean
    message: string
  }>
>

type AuthContextType = {
  user: IUserType
  login: (email: string, password: string, setErrPopUp: IErrPopUp) => void
  logout: () => void
}

type AuthContextProps = {
  children: ReactNode
}

const initialValue = {
  user: {
    authenticated: false,
    id: '',
    email: '',
    name: '',
  },
  login: (email: string, password: string, setErrPopUp: IErrPopUp) => {},
  logout: () => {},
}

const AuthContext = createContext<AuthContextType>(initialValue)

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = usePersistedState('user', initialValue.user)
  const PATH = '/LoginSystem'
  const navigate = useNavigate()

  const login = async (
    email: string,
    password: string,
    setErrPopUp: IErrPopUp,
  ) => {
    const response = await loginSession(email, password)

    if (response.status == 200) {
      const data = response.data

      setUser({
        authenticated: true,
        id: data.id,
        email: data.email,
        name: data.name,
      })
      navigate(PATH + '/')
    } else {
      setErrPopUp({ show: true, message: 'User Not Found' })
    }
  }

  const logout = () => {
    setUser({ authenticated: false, id: '', email: '', name: '' })
    navigate(PATH + '/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
