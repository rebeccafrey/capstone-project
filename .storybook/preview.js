import React from 'react'
import { addDecorator } from '@storybook/react'
import GlobalStyle from '../src/GlobalStyles'

addDecorator((storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
))
