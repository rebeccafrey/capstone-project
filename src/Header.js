import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return (
    <>
      <HeaderStyled>Seelenleben</HeaderStyled>
    </>
  )
}

const HeaderStyled = styled.header`
  background-color: #e6ddd3;
  height: 48px;
  font-family: 'Amatic SC', cursive;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
`
