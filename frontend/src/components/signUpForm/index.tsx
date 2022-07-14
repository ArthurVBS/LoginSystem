import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signUpSession } from '../../services/api'
import { validateEmail, validateName } from '../../utils/validate'
import Field from '../field'
import {
  Button,
  Footer,
  FormContainer,
  Header,
  Main,
  Text,
  Title,
} from './styles'

const SignUpForm: React.FC = () => {
  const navigate = useNavigate()
  const PATH = '/LoginSystem'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = async (name: string, email: string, password: string) => {
    if (!validateEmail(email) || !validateName(name)) {
      console.log('Email - Name')
      return
    }

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
      <Header>
        <Title>Sign up and Get in</Title>
      </Header>

      <Main>
        <Field
          type="text"
          state={name}
          setState={setName}
          label="Name"
          icon="name"
          placeholder="Name"
          range={{ min: 2, max: 150 }}
        />

        <Field
          type="email"
          state={email}
          setState={setEmail}
          label="Email Address"
          icon="email"
          placeholder="Email"
          range={{ min: 2, max: 150 }}
        />

        <Field
          type="password"
          state={password}
          setState={setPassword}
          label="Password"
          icon="password"
          placeholder="Password"
          range={{ min: 2, max: 32 }}
        />

        <Button>Sign Up</Button>
      </Main>

      <Footer>
        <Text>Aren't you new here?</Text>
        <Link to={PATH + '/login'}>Login </Link>
      </Footer>
    </FormContainer>
  )
}

export default SignUpForm
