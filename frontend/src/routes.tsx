import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/login'

const AppRoutes: React.FC = () => {
  const PATH = 'LoginSystem'

  return (
    <Routes>
      <Route path={PATH + '/'} element={<Home />} />
      <Route path={PATH + '/login'} element={<Login />} />
      <Route />
    </Routes>
  )
}

export default AppRoutes
