import React from 'react'
import { render } from '@testing-library/react'
import FilterTopics from './FilterTopics'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

test('renders placeholder text', () => {
  const { getByPlaceholderText } = render(
    <MemoryRouter>
      <FilterTopics />
    </MemoryRouter>
  )
  const search = getByPlaceholderText(/suche/i)
  expect(search).toBeInTheDocument()
})
