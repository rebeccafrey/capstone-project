import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

test('renders header text', () => {
  const { getByRole } = render(<Header />)
  const header = getByRole(/header/i)
  expect(header.textContent).toBe('Seelenleben')
})
