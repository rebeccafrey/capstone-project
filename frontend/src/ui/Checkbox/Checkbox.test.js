import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Checkbox from './Checkbox'

test('checkbox changes from false to true to false on clicking', () => {
  const { getByRole } = render(<Checkbox />)
  const checkbox = getByRole(/checkbox/i)
  expect(checkbox.checked).toBeFalsy()
  userEvent.click(checkbox)
  expect(checkbox).toBeTruthy()
  userEvent.click(checkbox)
  expect(checkbox.checked).toBeFalsy()
})
