import React from 'react'
import styled from 'styled-components/macro'

export default function Checkbox({ ...props }) {
  return (
    <label>
      <CheckboxHidden role="checkbox" {...props} />
      <CheckboxStyled role="checkbox" {...props} />
    </label>
  )
}

const CheckboxHidden = styled.input.attrs({ type: 'checkbox' })`
  visibility: hidden;
  position: absolute;
`
const CheckboxStyled = styled.div`
  width: 24px;
  height: 24px;
  border: solid 4px var(--secondary);
  background: ${(props) =>
    props.checked ? 'var(--secondary)' : 'var(--primary-light-8)'};
`
