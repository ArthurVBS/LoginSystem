import React, { useState } from 'react'
import Message from '../../components/message'
import PopUp from '../../components/popup'
import SignUpForm from '../../components/signUpForm'
import { useAuth } from '../../contexts/AuthContext'
import { Container } from './styles'

const SignUp: React.FC = () => {
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
        <SignUpForm setErrPopUp={setErrPopUp} />
      )}
      {renderError()}
    </Container>
  )
}

export default SignUp
