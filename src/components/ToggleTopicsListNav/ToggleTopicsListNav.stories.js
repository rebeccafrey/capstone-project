import React from 'react'
import ToggleTopicsListNav from './ToggleTopicsListNav'
import { action } from '@storybook/addon-actions'

export default {
  title: 'ToggleTopicsListNav',
  component: ToggleTopicsListNav,
}

export const ToggleTopicsListNavTesting = () => (
  <div style={{ padding: 20 }}>
    <ToggleTopicsListNav onChange={action('onChange')} />
  </div>
)
