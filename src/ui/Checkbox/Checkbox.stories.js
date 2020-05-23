import { action } from '@storybook/addon-actions'
import React from 'react'
import Checkbox from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
}

export const UncheckedCheckbox = () => (
  <div style={{ padding: 20 }}>
    <Checkbox />
  </div>
)

export const CheckedCheckbox = () => (
  <div style={{ padding: 20 }}>
    <Checkbox onClick={action('onChange')} checked />
  </div>
)
