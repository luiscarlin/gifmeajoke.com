import styled from 'styled-components'
import React from 'react'

const BannerContainer = styled.div`
  width: 100%;
  background: black;
  position: fixed;
  bottom: 0px;
  font-size: 4rem;
  text-align: center;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* opacity: 0.8; */
  p {
    margin: 0 3rem;
    color: white;
  }
  button {
    background: #ffd568;
  }
  .buttons {
  }
`

const CookieConsentBanner = () => {
  return (
    <BannerContainer>
      <p>
        Hello there! This website uses cookies to analyze traffic data and
        improve your experience.
      </p>
      <div className="buttons">
        <button onClick={() => alert('you accepted')}>Accept</button>
        <button onClick={() => alert('you declined')}>Decline</button>
      </div>
    </BannerContainer>
  )
}

export default CookieConsentBanner
