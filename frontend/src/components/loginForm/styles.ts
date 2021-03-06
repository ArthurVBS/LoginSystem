import styled from 'styled-components'

export const FormContainer = styled.form`
  background-color: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  max-width: 388px;
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
`

export const Header = styled.header`
  padding: 32px 16px;
`

export const Title = styled.h1`
  color: ${props => props.theme.primary};
  text-align: center;
  font-weight: 700;
  font-size: 1.5em;
  letter-spacing: 1px;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 24px;
  padding: 16px 32px;
`

export const Button = styled.button`
  background: linear-gradient(
    173deg,
    ${props => props.theme.primary} 32%,
    ${props => props.theme.secondary} 100%
  );
  color: ${props => props.theme.background};
  cursor: pointer;
  width: 100%;
  align-self: center;
  font-size: 1.1em;
  letter-spacing: 1px;
  border: none;
  padding: 8px;
  border-radius: 4px;
`

export const Footer = styled.footer`
  background-color: #00000010;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-top: 1px solid #0000001f;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  a {
    color: ${props => props.theme.primary};
    font-weight: 700;
    transition: color 0.4s;

    &:hover {
      color: ${props => props.theme.secondary};
    }
  }
`

export const Text = styled.p`
  font-weight: 400;
`
