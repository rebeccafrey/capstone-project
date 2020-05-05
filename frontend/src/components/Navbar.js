import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ReactComponent as ResultIcon } from '../icons/result.svg'
import { ReactComponent as StatementIcon } from '../icons/statements.svg'

export default function Navbar() {
  return (
    <>
      <NavbarStyled>
        <LinkStyled className="nav" activeClassName="selected" to="/statements">
          <IconStyled>
            <StatementIcon />
          </IconStyled>
        </LinkStyled>
        <LinkStyled className="nav" activeClassName="selected" to="/result">
          <ResultIcon />
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
    justify-content: flex-end;

 
`

const IconStyled = styled.div`
  color: var(--secondary);
  height: 32px;
`
