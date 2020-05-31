import React, { useState } from 'react'
import styled from 'styled-components/macro'
import useDocumentScrollThrottled from '../../services/useDocumentScrollThrottled'

export default function Header() {
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [shouldShowShadow, setShouldShowShadow] = useState(false)

  const minimumScroll = 50
  const timeoutDelay = 400

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > minimumScroll

    setShouldShowShadow(currentScrollTop > 2)

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, timeoutDelay)
  })

  const shadowStyle = shouldShowShadow ? 'shadow' : ''
  const hiddenStyle = shouldHideHeader ? 'hidden' : ''

  return (
    <HeaderStyled
      role="banner"
      className={`header ${shadowStyle} ${hiddenStyle}`}
    >
      Seelenleben
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  width: 100vw;
  font-family: 'Amatic SC', cursive;
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  background: var(--primary-light-40);

  transform: translateY(0);
  transition: transform 0.3s ease;
`
