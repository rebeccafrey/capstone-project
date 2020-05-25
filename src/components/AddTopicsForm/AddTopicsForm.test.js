import React from 'react'
import { render } from '@testing-library/react'
import AddTopicsForm from './AddTopicsForm'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

test('renders placeholder text', () => {
  const { getByPlaceholderText } = render(
    <MemoryRouter>
      <AddTopicsForm />
    </MemoryRouter>
  )
  const title = getByPlaceholderText(/titel/i)
  expect(title).toBeInTheDocument()
  const description = getByPlaceholderText(/beschreibung/i)
  expect(description).toBeInTheDocument()
})

test('should cycle elements in document tab order', () => {
  const { getByPlaceholderText } = render(
    <MemoryRouter>
      <AddTopicsForm />
    </MemoryRouter>
  )
  const title = getByPlaceholderText(/titel/i)
  const description = getByPlaceholderText(/beschreibung/i)

  userEvent.tab()
  expect(title).toHaveFocus()

  userEvent.tab()
  expect(description).toHaveFocus()
})
