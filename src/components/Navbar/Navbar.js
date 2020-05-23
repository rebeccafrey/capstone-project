import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ReactComponent as EditIcon } from '../../icons/EditIcon.svg'
import { ReactComponent as HomeIcon } from '../../icons/HomeIcon.svg'
import { ReactComponent as TopicsIcon } from '../../icons/TopicsIcon.svg'
import { ReactComponent as ResultIcon } from '../../icons/ResultIcon.svg'
import { ReactComponent as StatementIcon } from '../../icons/StatementsIcon.svg'
import useDocumentScrollThrottled from '../../useDocumentScrollThrottled'

export default function Navbar() {
  const [shouldHideFooter, setShouldHideFooter] = useState(false)
  const [shouldShowShadow, setShouldShowShadow] = useState(false)

  const minimum_scroll = 150
  const timeout_delay = 400

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > minimum_scroll

    setShouldShowShadow(currentScrollTop > 2)

    setTimeout(() => {
      setShouldHideFooter(isScrolledDown && isMinimumScrolled)
    }, timeout_delay)
  })

  const shadowStyle = shouldShowShadow ? 'shadow' : ''
  const hiddenStyle = shouldHideFooter ? 'hidden' : ''

  return (
    <>
      <NavbarStyled
        role="navigation"
        className={`footer ${shadowStyle} ${hiddenStyle}`}
      >
        <LinkStyled
          activeClassName="selected"
          exact
          to="/"
          data-testid="home-link"
        >
          <HomeIcon alt="Link zur Homepage" />
        </LinkStyled>
        <LinkStyled
          activeClassName="selected"
          to="/test-statements"
          data-testid="statements-link"
        >
          <StatementIcon alt="Link zur Selbsteinschätzung" />
        </LinkStyled>
        <LinkStyled
          activeClassName="selected"
          to="/test-result"
          data-testid="result-link"
        >
          <ResultIcon alt="Link zum Ergebnis" />
        </LinkStyled>
        <LinkStyled
          activeClassName="selected"
          to="/add-topics"
          data-testid="entries-link"
        >
          <EditIcon alt="Link zum Eingabeformular" />
        </LinkStyled>
        <LinkStyled
          activeClassName="selected"
          to="/topics-all"
          data-testid="topics-link"
        >
          <TopicsIcon alt="Link zur Themensammlung" />
        </LinkStyled>
      </NavbarStyled>
    </>
  )
}

const NavbarStyled = styled.footer`
  width: 100vw;
  background-color: var(--primary-light-40);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  transform: translateY(0);
  transition: transform 0.3s ease;
`
const LinkStyled = styled(NavLink)`
  padding: 10px;
  background: var(--primary-light-40);
  text-align: center;
  cursor: default;

  svg {
    fill: var(--secondary);
    width: 32px;
    height: 32px;
  }

  &.selected {
    background: var(--secondary);
    svg {
      fill: var(--primary-light-40);
    }
  }
`
