import React from 'react'
import { render, getByLabelText } from '@testing-library/react'
import { NavButton } from './NavButton'
import { MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'

test('renders NavButton with text in it', () => {
  const history = createMemoryHistory({ initialEntries: ['statements'] })
  const { getByRole } = render(
    <MemoryRouter>
      <NavButton to={history}>Button</NavButton>
    </MemoryRouter>
  )
  const navbutton = getByRole(/navigation-button/i)
  expect(navbutton.textContent).toBe('Button')
})
