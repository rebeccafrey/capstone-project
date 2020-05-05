//button not shown yet; currently error after importing addDecorator

import { action } from '@storybook/addon-actions'
import React from 'react'
import { Button } from './Button'
import addDecorator from '../../.storybook/preview'

export default {
  title: 'Button',
  component: Button,
  decorators: [addDecorator],
}

export const Simple = () => {
  return (
    <Button
      defaultText="Simple"
      activeText="Simple active"
      onClick={action('onClick')}
    />
  )
}

export const LongText = () => (
  <Button
    defaultText="Lorem ipsum dolor sit foo bar baz"
    activeText="Simple active"
    onClick={action('onClick')}
  />
)

export const ActiveButton = () => (
  <Button
    defaultText="Lorem ipsum dolor sit foo bar baz"
    activeText="I am active"
    onClick={action('onClick')}
    isActive
  />
)
