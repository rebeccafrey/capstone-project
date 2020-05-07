import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ReactComponent as ResultIcon } from '../icons/ResultIcon.svg'
import { ReactComponent as StatementIcon } from '../icons/StatementsIcon.svg'

export default function Navbar() {
  return (
    <>
      <NavbarStyled>
        <LinkStyled activeClassName="selected" to="/statements">
          <StatementIconStyled />
        </LinkStyled>
        <LinkStyled activeClassName="selected" to="/result">
          <ResultIconStyled />
        </LinkStyled>
      </NavbarStyled>
    </>
  )
}

const NavbarStyled = styled.footer`
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100vw;
  height: 48px;
  background-color: var(--primary-light-40);
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const LinkStyled = styled(NavLink)`
  padding: 10px;
  background: var(--primary-light-40);
  height: 48px;
  text-align: center;

  &.selected {
    background: var(--secondary);
    svg {
      fill: var(--primary-light-40);
    }
  }
`
const StatementIconStyled = styled(StatementIcon)`
  fill: var(--secondary);
`
const ResultIconStyled = styled(ResultIcon)`
  fill: var(--secondary);
`
