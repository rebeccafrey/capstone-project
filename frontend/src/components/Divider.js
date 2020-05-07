import React from 'react'
import styled from 'styled-components/macro'

export function Divider() {
  const RectangleStyled = styled.div`
    width: 75%;
    height: 1px;
    background-color: var(--primary-light);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
  `
  return (
    <>
      <RectangleStyled />
    </>
  )
}
