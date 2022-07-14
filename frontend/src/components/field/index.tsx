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
    } else if (icon == 'name') {
      return <Icon className="fas fa-signature"></Icon>
    }
  }

  return (
    <Container>
      <Label>{label}</Label>
      <WrapperInput>
        {renderIcon()}

        <Input
          required
          value={state}
          type={type}
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
