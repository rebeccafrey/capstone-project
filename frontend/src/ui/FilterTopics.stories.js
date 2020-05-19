import React from 'react'
import FilterTopics from './FilterTopics'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Filter',
  component: FilterTopics,
}

const entries = [
  {
    topic: 'erstes Thema',
    description: 'erste Beschreibung',
    bookmarked: true,
  },
  {
    topic: 'zweites Thema',
    description: 'zweite Beschreibung',
    bookmarked: false,
  },
]

export const Filter = () => (
  <div style={{ padding: 20 }}>
    <main>
      <FilterTopics entries={entries} filterTopics={action('onClick')} />
    </main>
  </div>
)
