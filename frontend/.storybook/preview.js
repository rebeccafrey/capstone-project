import { withInfo } from '@storybook/addon-info'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import {
  addDecorator,
  addParameters,
  configure,
  setAddon,
} from '@storybook/react'
import React from 'react'
import JSXAddon from 'storybook-addon-jsx'
import GlobalStyle from '../src/GlobalStyles'
import { MemoryRouter as Router } from 'react-router-dom'

addDecorator(withInfo)

export function addDecorator(storyFn) {
  return (
    <Router>
      <GlobalStyle />
      {storyFn()}
    </Router>
  )
}

setAddon(JSXAddon)

function loadStories() {
  require('../src/index.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})
