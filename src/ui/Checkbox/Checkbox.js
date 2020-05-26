import React from 'react'
import styled from 'styled-components/macro'

export default function Checkbox({ ...props }) {
  return <CheckboxStyled role="checkbox" {...props} />
}

const CheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 24px;
  height: 24px;
  border: solid 4px var(--secondary);

  :focus {
    outline: none;
  }

  &:checked {
    animation: fill 0.5s;
    animation-fill-mode: forwards;

    @keyframes fill {
      from {
        background: var(--primary-light-8);
      }
      to {
        background: var(--secondary);
      }
    }
  }
`
