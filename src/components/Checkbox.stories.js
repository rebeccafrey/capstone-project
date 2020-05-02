import { action } from '@storybook/addon-actions'
import React from 'react'
import Checkbox from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
}

export const UncheckedCheckbox = () => <Checkbox />

export const CheckedCheckbox = () => {
  return <Checkbox onClick={action('onChange')} checked />
}
