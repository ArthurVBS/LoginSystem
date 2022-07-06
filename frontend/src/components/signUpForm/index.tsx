import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signUpSession } from '../../services/api'
import { Button, Field, FormContainer, Title } from './styles'

const SignUpForm: React.FC = () => {
  const navigate = useNavigate()
  const PATH = '/LoginSystem'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = async (name: string, email: string, password: string) => {
    const response = await signUpSession(name, email, password)
    console.log(response)

    if (response?.status == 200) {
      navigate(PATH + '/login')
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signUp(name, email, password)
  }

  return (
    <FormContainer onSubmit={e => handleSubmit(e)}>
      <Title>Sign Up</Title>
      <Field>
        <label htmlFor="name">Name</label>
        <input
          required
          value={name}
          type="text"
          name="name"
          id="name"
          onChange={e => setName(e.target.value)}
        />
      </Field>
      <Field>
        <label htmlFor="email">Email</label>
        <input
          required
          value={email}
          type="email"
          name="email"
          id="email"
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
          onChange={e => setPassword(e.target.value)}
        />
      </Field>
      <Button>Submit</Button>
      <Link to={PATH + '/login'}>Login ^^</Link>
    </FormContainer>
  )
}

export default SignUpForm
