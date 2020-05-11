import { render } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import statementData from '../statements.json'
import Statements from './statements'

test('renders statement list', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Statements statement={statementData} />
    </MemoryRouter>
  )
  const statementElement = getByText(/einzelgespräche/i)
  expect(statementElement).toBeInTheDocument()
})
