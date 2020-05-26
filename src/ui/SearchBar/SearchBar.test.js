import React from 'react'
import { render } from '@testing-library/react'
import SearchBar from './SearchBar'
import { MemoryRouter } from 'react-router-dom'

test('renders placeholder text', () => {
  const { getByPlaceholderText } = render(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>
  )
  const search = getByPlaceholderText(/suche/i)
  expect(search).toBeInTheDocument()
})
