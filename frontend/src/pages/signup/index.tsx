import React from 'react'
import Message from '../../components/message'
import SignUpForm from '../../components/signUpForm'
import { useAuth } from '../../contexts/AuthContext'
import { Container } from './styles'

const SignUp: React.FC = () => {
  const { user } = useAuth()

  return (
    <Container>{user.authenticated ? <Message /> : <SignUpForm />}</Container>
  )
}

export default SignUp
