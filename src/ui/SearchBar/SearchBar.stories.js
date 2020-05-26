import React from 'react'
import SearchBar from './SearchBar'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Filter',
  component: SearchBar,
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
      <SearchBar entries={entries} filterTopics={action('onClick')} />
    </main>
  </div>
)
