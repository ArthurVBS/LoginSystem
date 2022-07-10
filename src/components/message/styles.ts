import styled from 'styled-components'

export const Container = styled.div`
  background-color: #0000001f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  max-width: 528px;
  width: 100%;
  margin: 0 auto;
  border-radius: 16px;
  padding: 16px;
`

export const Text = styled.h4`
  text-align: center;
  margin: 0;
`

export const WrapperLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    background-color: #0000001f;
    color: black;
    font-size: 0.8em;
    text-decoration: none;
    border-radius: 8px;
    padding: 4px;
    transition: background-color 0.4s, color 0.4s;

    &:hover {
      background-color: grey;
      color: lightgrey;
    }
  }
`
