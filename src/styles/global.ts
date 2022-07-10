import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    scrollbar-width: auto;
    scrollbar-color: ${props => props.theme.background} ${props =>
  props.theme.background};
  }

  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track, ::-webkit-scrollbar-corner {
    background: ${props => props.theme.background};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.primary};
    border-radius: 8px;
    border: 4px solid ${props => props.theme.background};
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #707070;
  }

  *::-webkit-scrollbar-thumb:active {
    background-color: #909090;
  }

  html{
    scroll-behavior: smooth;
  }

  body{
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    font-family: 'Quicksand', sans-serif;
  }
`
