import { withInfo } from '@storybook/addon-info'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator, addParameters } from '@storybook/react'
import React from 'react'
import GlobalStyles from '../src/GlobalStyles'
import { MemoryRouter as Router } from 'react-router-dom'

addDecorator(withInfo)

addDecorator((storyFn) => (
  <Router>
    <GlobalStyles />
    {storyFn()}
  </Router>
))

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})
