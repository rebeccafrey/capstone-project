import React from 'react'
import styled from 'styled-components/macro'
import { AiOutlineArrowUp } from 'react-icons/ai'

export default function AnchorToTop() {
  return (
    <a href="#top">
      <AnchorStyled>
        <ArrowUpStyled />
      </AnchorStyled>
    </a>
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
  position: fixed;
  bottom: 50px;
  right: 2px;
  line-height: 48px;
  text-align: center;
`
