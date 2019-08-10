import styled from 'styled-components'
import React from 'react'

const BannerContainer = styled.div`
  width: 100%;
  background: red;
  position: fixed;
  bottom: 0px;
  font-size: 4rem;
  text-align: center;
  padding: 2rem;
`

const CookieConsentBanner = () => {
  return (
    <BannerContainer>
      <p>This website uses cookies to improve user experience</p>
      <button onClick={() => alert('you accepted')}>Accept</button>
      <button onClick={() => alert('you declined')}>Decline</button>
    </BannerContainer>
  )
}

export default CookieConsentBanner
