import React from 'react'
import Navbar from './Navbar'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Navbar',
  component: Navbar,
}

export const NavigationTesting = () => <Navbar onClick={action('onClick')} />
