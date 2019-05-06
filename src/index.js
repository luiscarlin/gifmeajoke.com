import React from 'react'
import ReactDOM from 'react-dom'
import normalize from 'normalize.css'
import { createGlobalStyle } from 'styled-components'
import Main from './Main'
import * as serviceWorker from './serviceWorker'

const Global = createGlobalStyle`
  ${normalize}
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    font-family: 'Nunito Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    #root {
      height: 100%;
      display: flex;
    }
  }
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
