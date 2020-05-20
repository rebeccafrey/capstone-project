import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

test('renders header text', () => {
  const { getByRole } = render(<Header />)
  const banner = getByRole(/header/i)
  expect(banner.textContent).toBe('Seelenleben')
})
