import { action } from '@storybook/addon-actions'
import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

export const Simple = () => {
  return (
    <Button
      text="Simple active"
      activeText="Simple active"
      onClick={action('onClick')}
    >
      I am active
    </Button>
  )
}

export const LongText = () => (
  <Button
    text="Lorem ipsum dolor sit foo bar baz"
    activeText="Simple active"
    onClick={action('onClick')}
  >
    This is a very long text for a button
  </Button>
)

export const DisabledButton = () => (
  <Button text="I am disabled" onClick={action('onClick')} disabled>
    I am disabled
  </Button>
)
