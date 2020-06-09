import React from 'react'
import { render } from '@testing-library/react'
import SearchBar from './SearchBar'

test('renders placeholder text', () => {
  const { getByPlaceholderText } = render(<SearchBar />)
  const search = getByPlaceholderText(/suche/i)
  expect(search).toBeInTheDocument()
})
