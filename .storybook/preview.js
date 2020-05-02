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

addDecorator(withInfo)

addDecorator((storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
))

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
