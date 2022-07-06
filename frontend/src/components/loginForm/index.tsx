import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { validateEmail } from '../../utils/validate'
import { Button, Field, FormContainer, Title } from './styles'

const LoginForm: React.FC = () => {
  const PATH = '/LoginSystem'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, login } = useAuth()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      console.log('Email')
      return
    }

    login(email, password)
  }

  return (
    <FormContainer onSubmit={e => handleSubmit(e)}>
      <Title>Welcome ^^</Title>
      <p>Authenticated: {String(user.authenticated)}</p>
      <p>tip: arthur@gmail.com & 123</p>
      <Field>
        <label htmlFor="email">Email</label>
        <input
          required
          value={email}
          type="email"
          name="email"
          id="email"
          minLength={2}
          maxLength={150}
          onChange={e => setEmail(e.target.value)}
        />
      </Field>
      <Field>
        <label htmlFor="password">Password</label>
        <input
          required
          value={password}
          type="password"
          name="password"
          id="password"
          minLength={2}
          maxLength={32}
          onChange={e => setPassword(e.target.value)}
        />
      </Field>
      <Button>Submit</Button>
      <Link to={PATH + '/signup'}>Sign Up ^^</Link>
    </FormContainer>
  )
}

export default LoginForm
