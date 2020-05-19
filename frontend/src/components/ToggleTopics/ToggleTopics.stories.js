import React from 'react'
import ToggleTopics from './ToggleTopics'
import { action } from '@storybook/addon-actions'

export default {
  title: 'ToggleTopics',
  component: ToggleTopics,
}

export const ToggleTopicsNaviation = () => (
  <div style={{ padding: 20 }}>
    <ToggleTopics onClick={action('onClick')} />
  </div>
)
