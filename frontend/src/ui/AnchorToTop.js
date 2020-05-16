import React from 'react'
import styled from 'styled-components/macro'
import { AiOutlineArrowUp } from 'react-icons/ai'

export default function AnchorToTop() {
  return (
    <>
      <AnchorStyled>
        <ArrowUpStyled />
      </AnchorStyled>
    </>
  )
}

const ArrowUpStyled = styled(AiOutlineArrowUp)`
  color: var(--secondary);
`
const AnchorStyled = styled.div`
  border-radius: 50%;
  background: var(--primary-light);
  width: 48px;
  height: 48px;
  opacity: 0.6;
  position: sticky;
  bottom: 50px;
  right: 4px;
`
