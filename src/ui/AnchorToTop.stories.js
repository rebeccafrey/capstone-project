import React from 'react'
import AnchorToTop from './AnchorToTop'
import { action } from '@storybook/addon-actions'

export default {
  title: 'BackToTop',
  component: AnchorToTop,
}

export const AnchorToTopTesting = () => (
  <AnchorToTop onClick={action('onClick')} />
)
