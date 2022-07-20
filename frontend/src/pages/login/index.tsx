import React, { useState } from 'react'
import LoginForm from '../../components/loginForm'
import Message from '../../components/message'
import PopUp from '../../components/popup'
import { useAuth } from '../../contexts/AuthContext'
import { Container } from './styles'

const Login: React.FC = () => {
  const { user } = useAuth()
  const [errPopUp, setErrPopUp] = useState({ show: false, message: '' })

  const renderError = () => {
    return errPopUp.show ? (
      <PopUp message={errPopUp.message} setErrPopUp={setErrPopUp} />
    ) : null
  }

  return (
    <Container>
      {user.authenticated ? (
        <Message />
      ) : (
        <LoginForm setErrPopUp={setErrPopUp} />
      )}
      {renderError()}
    </Container>
  )
}

export default Login
