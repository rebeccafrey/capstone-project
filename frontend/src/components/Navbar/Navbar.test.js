import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import Homepage from '../../pages/homepage'
import Resultpage from '../../pages/result'
import Topicpage from '../../pages/topics'
import Navbar from './Navbar'
import userEvent from '@testing-library/user-event'

test('that I can navigate to homepage using navbar', () => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  const { getByTestId } = render(
    <Router history={history}>
      <Navbar />
    </Router>
  )
  const homebutton = getByTestId(/home-link/i)
  const resultbutton = getByTestId(/result-link/i)
  const topicsbutton = getByTestId(/topics-link/i)
  const { getByText } = render(
    <Router history={history}>
      <Homepage />
      <Resultpage />
      <Topicpage />
    </Router>
  )
  expect(getByText(/willkommen/i)).toBeInTheDocument()
  userEvent.click(resultbutton)
  expect(getByText(/dein Ergebnis/i)).toBeInTheDocument()
  userEvent.click(topicsbutton)
  expect(getByText(/anderer irritiert/i)).toBeInTheDocument()
  userEvent.click(homebutton)
  expect(getByText(/willkommen/i)).toBeInTheDocument()
})
