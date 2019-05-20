import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import Card from './components/card'
import Footer from './components/footer'
import Welcome from './components/welcome'

const FooterContainer = styled.footer`
  margin-top: 20px;
  text-align: center;
`

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

export default () => {
  const fadeIn = useSpring({ from: { opacity: 0 }, opacity: 1 })

  return (
    <AppContainer style={fadeIn}>
      <Welcome />
      <Card />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </AppContainer>
  )
}
