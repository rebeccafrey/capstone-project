import { render } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import questionnaireData from '../questionnaire.json'
import Questionnaire from './QuestionnairePage'

test('renders statement list', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Questionnaire statement={questionnaireData} />
    </MemoryRouter>
  )
  const questionnaireElement = getByText(/einzelgespräche/i)
  expect(questionnaireElement).toBeInTheDocument()
})
