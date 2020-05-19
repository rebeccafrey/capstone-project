import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'
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
