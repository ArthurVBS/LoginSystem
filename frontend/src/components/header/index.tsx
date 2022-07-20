import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import {
  Button,
  Container,
  Icon,
  Image,
  Label,
  LeftBox,
  RightBox,
} from './styles'
import LaptopSvg from '../../assets/laptop.svg'

const Header: React.FC = () => {
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <Container>
      <LeftBox>
        <Image src={LaptopSvg} alt="Logo" />
        <Label>Login System</Label>
      </LeftBox>
      <RightBox>
        <Button onClick={() => handleLogout()}>
          <Icon className="fas fa-sign-out-alt"></Icon>
        </Button>
      </RightBox>
    </Container>
  )
}

export default Header
