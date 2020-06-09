import React from 'react'
import styled from 'styled-components/macro'
import useHideOnScroll from '../../services/useHideOnScroll'

export default function Header() {
  const { shouldHide } = useHideOnScroll()

  const hiddenStyle = shouldHide ? 'hidden' : ''

  return (
    <HeaderStyled role="banner" className={`header ${hiddenStyle}`}>
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
