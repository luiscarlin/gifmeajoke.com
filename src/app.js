import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import ConsentBanner from './components/ConsentBanner'

const AppContainer = styled(animated.div)`
  height: 100%;
  min-width: 300px;
  padding: 3rem;

  @media only screen and (max-width: 900px) {
    padding: 3rem;
  }

  @media only screen and (max-width: 600px) {
    padding: 2rem;
  }
`

const App = () => {
  const fadeIn = useSpring({ from: { opacity: 0 }, opacity: 1 })

  return (
    <AppContainer style={fadeIn}>
      <Header />
      <Card />
      <Footer />
      <ConsentBanner />
    </AppContainer>
  )
}

export default App
