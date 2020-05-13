import React from 'react'
import FilterTopics from './FilterTopics'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Filter',
  component: FilterTopics,
}

export const Filter = () => (
  <div style={{ padding: 20 }}>
    <FilterTopics
      topic={'I am a state related Object'}
      filterTopics={action('onClick')}
    />
  </div>
)
