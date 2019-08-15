import styled from 'styled-components'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import reactGA from 'react-ga'
import Button from './Button'

const BannerContainer = styled.div`
  width: 100%;
  background: ${props => props.theme.primaryFont};
  position: fixed;
  bottom: 0px;
  font-size: 4rem;
  text-align: center;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.95;
  p {
    color: ${props => props.theme.background};
  }
`

const ButtonsContainer = styled.div`
  margin-top: 1rem;

  button {
    margin: 0 1rem;
  }
`

const ConsentBanner = () => {
  const [cookies, setCookie] = useCookies(['consent'])
  const [displayConsent, setDisplayConsent] = useState(true)

  const consentAcceptedHandler = () => {
    reactGA.initialize('UA-140137818-1')
    setCookie('consent', 'accepted')
  }

  const consentDeclineHandler = () => {
    setDisplayConsent(false)
  }

  if (cookies['consent'] === 'accepted') {
    return null
  }

  return (
    displayConsent && (
      <BannerContainer>
        <p>
          Hello there! This website uses cookies to analyze traffic data and
          improve your experience.
        </p>
        <ButtonsContainer>
          <Button onClick={consentDeclineHandler} text={'Decline'} />
          <Button
            type={'primary'}
            onClick={consentAcceptedHandler}
            text={'Accept'}
          />
        </ButtonsContainer>
      </BannerContainer>
    )
  )
}

export default ConsentBanner
