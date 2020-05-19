import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import Topicpage from '../../pages/topics'
import BookmarkedTopics from '../../pages/topics-discussion'
import userEvent from '@testing-library/user-event'
import ToggleTopics from './ToggleTopics'

test('that I can navigate between all and bookmarked topics', () => {
  const history = createMemoryHistory({ initialEntries: ['/topics'] })
  const { getByTestId } = render(
    <Router history={history}>
      <ToggleTopics />
    </Router>
  )

  const topicslink = getByTestId(/all-topics-link/i)
  const bookmarklink = getByTestId(/topics-discussion-link/i)
  const { getByText } = render(
    <Router history={history}>
      <Topicpage />
      <BookmarkedTopics />
    </Router>
  )
  expect(getByText(/klicke auf die pfeile/i)).toBeInTheDocument()
  userEvent.click(topicslink)
  expect(getByText(/fertig/i)).toBeInTheDocument()
  userEvent.click(bookmarklink)
  expect(getByText(/klicke auf die pfeile/i)).toBeInTheDocument()
})
