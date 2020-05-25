import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, color } from '@storybook/addon-knobs'
import React from 'react'
import Bookmark from './Bookmark'

export default {
  title: 'Bookmark',
  component: Bookmark,
  decorators: [withKnobs],
}

export const BookmarkTesting = () => (
  <div style={{ padding: 20 }}>
    <Bookmark
      onClick={action('bookmarkClick')}
      bookmarked={boolean('bookmarked', true)}
    />
  </div>
)

const label = 'Color'
const defaultValue = 'var(--secondary)'

export const BookmarkColor = () => (
  <div style={{ padding: 20 }}>
    <Bookmark color={color(label, defaultValue)} />
  </div>
)
