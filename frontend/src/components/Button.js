import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'

export default function Button({ children }) {
  return <ButtonStyled role="button">{children}</ButtonStyled>
}

Button.propTypes = {
  children: PropTypes.string,
}

const ButtonStyled = styled.button`
  width: 300px;
  height: 48px;
  border-radius: 8px;
  box-shadow: -4px 5px 8px 0 rgba(67, 86, 100, 0.12),
    -1px 2px 4px 0 rgba(67, 86, 100, 0.1);
  background: var(--secondary);
  margin: 40px auto 40px auto;
  color: var(--primary-light-8);
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: 48px;
  text-decoration: none;

  &:hover {
    background: var(--primary-light);
    color: var(--secondary);
  }
`
