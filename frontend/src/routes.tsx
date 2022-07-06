import { ReactNode } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'

type PrivateProps = {
  children: ReactNode
}

const AppRoutes: React.FC = () => {
  const PATH = 'LoginSystem'

  const Private: React.FC<PrivateProps> = ({ children }) => {
    const { user } = useAuth()

    if (!user.authenticated) {
      return <Navigate to={'/' + PATH + '/login'} />
    }

    return <>{children}</>
  }

  return (
    <Routes>
      <Route
        path={PATH + '/'}
        element={
          <Private>
            <Home />
          </Private>
        }
      />
      <Route path={PATH + '/login'} element={<Login />} />
      <Route path={PATH + '/signup'} element={<SignUp />} />
      <Route />
    </Routes>
  )
}

export default AppRoutes
