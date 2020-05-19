import React from 'react'
import AddTopic from './Form'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Form',
  component: AddTopic,
}

export const Form = () => (
  <div style={{ padding: 20 }}>
    <main>
      <AddTopic
        topic={'I am a state related Object'}
        updateTopicEntry={action('onInput')}
        addEntry={action('onClick')}
      />
    </main>
  </div>
)
