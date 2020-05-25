import React from 'react'
import AddTopicsForm from './AddTopicsForm'
import { action } from '@storybook/addon-actions'

export default {
  title: 'AddTopicsForm',
  component: AddTopicsForm,
}

export const Form = () => (
  <div style={{ padding: 20 }}>
    <main>
      <AddTopicsForm
        topic={'I am a state related Object'}
        updateTopicEntry={action('onInput')}
        addEntry={action('onClick')}
      />
    </main>
  </div>
)
