import { action } from '@storybook/addon-actions'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
}

export const Simple = () => {
  return (
    <Button activeText="Simple active" onClick={action('onClick')}>
      I am active
    </Button>
  )
}

export const LongText = () => (
  <Button activeText="Simple active" onClick={action('onClick')}>
    This is a very long text for a button
  </Button>
)

export const DisabledButton = () => (
  <Button onClick={action('onClick')} disabled={boolean('Disabled', true)}>
    Disabled toggle
  </Button>
)
