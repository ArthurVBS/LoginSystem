import React from 'react'
import { Container, Icon, Input, Label, WrapperInput } from './styles'

type Props = {
  state: any
  setState: React.SetStateAction<any>
  type: string
  label: string
  icon?: string
  placeholder?: string
  range?: {
    min: number
    max: number
  }
}

const Field: React.FC<Props> = ({
  state,
  setState,
  type,
  label,
  icon,
  placeholder,
  range,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }

  const renderIcon = () => {
    if (icon == 'email') {
      return <Icon className="fas fa-user"></Icon>
    } else if (icon == 'password') {
      return <Icon className="fas fa-lock"></Icon>
    }
  }

  return (
    <Container>
      <Label htmlFor={state}>{label}</Label>
      <WrapperInput>
        {renderIcon()}

        <Input
          required
          value={state}
          type={type}
          name={state}
          id={state}
          placeholder={placeholder}
          minLength={range?.min}
          maxLength={range?.max}
          onChange={e => handleChange(e)}
        />
      </WrapperInput>
    </Container>
  )
}

export default Field
