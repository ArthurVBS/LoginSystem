import styled from 'styled-components'

export const Container = styled.main`
  background-color: ${props => props.theme.primary};
  display: flex;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  padding: 16px;
`
