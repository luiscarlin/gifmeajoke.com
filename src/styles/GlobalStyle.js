import normalize from 'normalize.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Nunito Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: ${props => props.theme.background};
    transition: background .7s ease-in-out;
    h1 {
      line-height: 1.5;
      color: ${props => props.theme.primaryFont};
      margin: 0;
      font-size: 5rem;

      @media only screen and (max-width: 900px) {
        font-size: 5rem;
      }

      @media only screen and (max-width: 600px) {
        font-size: 4rem;
      }
    }
    h2 {
      font-weight: normal;
      line-height: 1.5;
      color: ${props => props.theme.secondaryFont};
      margin: 0;
      font-size: 2rem;

      @media only screen and (max-width: 900px) {
        font-size: 2rem;
      }

      @media only screen and (max-width: 600px) {
        font-size: 1.5rem
      }
    }
    p {
      margin: 0;
      color: ${props => props.theme.primaryFont};
      line-height: 1.5;
      font-size: 2.5rem;

      @media only screen and (max-width: 900px) {
        font-size: 3.25rem;
      }

      @media only screen and (max-width: 600px) {
        font-size: 2.25rem;
      }
    }
    a {
      color: ${props => props.theme.secondaryFont};

      &:active, &:hover, &:focus {
        color: ${props => props.theme.primaryFont};
        outline: none;
      }

      transition: all .3s ease-in-out;
    }
  }
`

export default GlobalStyle
