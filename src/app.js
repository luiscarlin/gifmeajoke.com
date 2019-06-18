import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import Card from './components/Card'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import { ThemeContext } from './ThemeContext'
import Switch from 'react-switch'

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

  const [toggle, setToggle] = useState(false)

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      setToggle(true)
    } else {
      setTheme('light')
      setToggle(false)
    }
  }

  return (
    <AppContainer style={fadeIn}>
      <Switch
        onChange={toggleTheme}
        checked={toggle}
        uncheckedIcon={false}
        checkedIcon={false}
        offColor="#000"
        onColor="#fff"
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      />
      <Welcome />
      <Card />
      <Footer />
    </AppContainer>
  )
}

export default App
