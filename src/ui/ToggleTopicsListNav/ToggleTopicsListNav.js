import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function ToggleTopicsListNav() {
  return (
    <>
      <LinksNavStyled role="AllTopics">
        <LinkStyled
          activeClassName="selected"
          to="/topics-all"
          data-testid="all-topics-link"
        >
          alle Themen
        </LinkStyled>
        <LinkStyled
          activeClassName="selected"
          to="/topics-for-discussion"
          data-testid="topics-discussion-link"
        >
          offen zur Diskussion
        </LinkStyled>
      </LinksNavStyled>
    </>
  )
}
const LinksNavStyled = styled.section`
  font-size: 14px;
  margin-bottom: 24px;
  width: 95%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: var(--primary-light-40);
`
const LinkStyled = styled(NavLink)`
  text-align: center;
  padding: 4px;
  cursor: default;
  color: var(--secondary) !important;

  &.selected {
    background: var(--secondary);
    color: var(--primary-light-40) !important;
  }
`
