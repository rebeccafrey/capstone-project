import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'

export default function Checkbox({ checked, ...props }) {
  return (
    <label>
      <CheckboxHidden checked={checked} {...props} />
      <CheckboxStyled checked={checked} />
    </label>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
}

const CheckboxHidden = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
const CheckboxStyled = styled.div`
  width: 24px;
  height: 24px;
  border: solid 4px var(--secondary);
  background: ${(props) =>
    props.checked ? 'var(--secondary)' : 'var(--primary-light-8)'};
`
