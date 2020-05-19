import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return <HeaderStyled role="header">Seelenleben</HeaderStyled>
}
const HeaderStyled = styled.header`
  width: 100vw;
  font-family: 'Amatic SC', cursive;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  background: var(--primary-light-40);
`
