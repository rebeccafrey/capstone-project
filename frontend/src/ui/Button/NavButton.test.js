import React from 'react'
import { render } from '@testing-library/react'
import Button from './Button'
import { MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'

test('renders NavButton with text in it', () => {
  const history = createMemoryHistory({ initialEntries: ['statements'] })
  const { getByRole } = render(
    <MemoryRouter>
      <Button to={history}>Button</Button>
    </MemoryRouter>
  )
  const button = getByRole(/navigation-button/i)
  expect(button.textContent).toBe('Button')
})
