import React, { useContext } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import Card from './components/Card'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import { ThemeContext } from './ThemeContext'
import Switch from './components/Switch'

const AppContainer = styled(animated.div)`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  margin: 40px;

  @media only screen and (max-width: 900px) {
    margin: 40px;
  }

  @media only screen and (max-width: 600px) {
    margin: 20px;
  }
`

const App = () => {
  const fadeIn = useSpring({ from: { opacity: 0 }, opacity: 1 })
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    if (theme == 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <AppContainer style={fadeIn}>
      {/* <button onClick={toggleTheme}>Switch to {theme}</button> */}
      <Switch isChecked={false} onChange={() => console.log('hello')} />

      <Welcome />
      <Card />
      <Footer />
    </AppContainer>
  )
}

export default App
