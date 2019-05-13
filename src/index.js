import React from 'react'
import ReactDOM from 'react-dom'
import normalize from 'normalize.css'
import { createGlobalStyle } from 'styled-components'
import Main from './app'
import * as serviceWorker from './serviceWorker'
import colors from './colors'

const Global = createGlobalStyle`
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
    h1 {
      font-size: 4rem;
      line-height: 1.5;
      color: ${colors.primaryFont};
      margin: 0;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: normal;
      line-height: 1.5;
      color: ${colors.secondaryFont};
      margin: 0;
    }
    a {
      color: ${colors.secondaryFont};

      &:active, &:hover, &:focus {
        color: ${colors.primaryFont};
        outline: none;
      }

      transition: all .3s ease-in-out;
    }
  }
  /* #root {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;

    @media only screen and (min-width: 901px) {
      margin: 40px;
    }
  }  */
`

function App() {
  return (
    <>
      <Global />
      <Main />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
