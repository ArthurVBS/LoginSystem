import { createContext, ReactNode, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import usePersistedState from '../utils/usePersistedState'

interface IUserType {
  authenticated: boolean
  id: string
  email: string
}

type AuthContextType = {
  user: IUserType
  login: (email: string, password: string) => void
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
  },
  login: (email: string, password: string) => {},
  logout: () => {},
}

const AuthContext = createContext<AuthContextType>(initialValue)

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = usePersistedState('user', initialValue.user)
  const PATH = '/LoginSystem'
  const navigate = useNavigate()

  const login = (email: string, password: string) => {
    console.log('Login', { email, password })

    if (password === '123') {
      setUser({ authenticated: true, id: '123', email: email })
      navigate(PATH + '/')
    }
  }

  const logout = () => {
    setUser({ authenticated: false, id: '', email: '' })
    navigate(PATH + '/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
