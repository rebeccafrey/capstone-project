import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import Button from '../ui/Button/Button'

export default function AddTopic({ addEntry }) {
  const uniqueTopicId = uuidv4()
  const [entry, setEntry] = useState({
    id: uniqueTopicId,
    topic: '',
    description: '',
  })
  const { topic, description } = entry
  const disabled = topic.length === 0 || description.length === 0

  return (
    <>
      <FormStyled onSubmit={addNewEntry}>
        <label htmlFor="topic">
          Vergib eine Überschrift:<RequiredStyled>*</RequiredStyled>
        </label>
        <TitleInputStyled
          id="topic"
          name="topic"
          type="text"
          placeholder="Titel"
          required
          onChange={updateTopicEntry}
          value={entry.topic}
        />
        <label htmlFor="description">
          Beschreibe kurz das Thema:<RequiredStyled>*</RequiredStyled>
        </label>
        <ContentInputStyled
          id="description"
          name="description"
          type="textarea"
          placeholder="Beschreibung"
          required
          onChange={updateTopicEntry}
          value={entry.description}
        />
        <SmallTextStyled>
          <RequiredStyled>*</RequiredStyled>Pflichtfeld
        </SmallTextStyled>
        <Button type="submit" disabled={disabled}>
          Hinzufügen!
        </Button>
      </FormStyled>
    </>
  )
  function updateTopicEntry(e) {
    setEntry({ ...entry, [e.target.name]: e.target.value })
  }

  function addNewEntry(e) {
    addEntry(entry)
    setEntry({
      id: uniqueTopicId,
      topic: '',
      description: '',
    })
  }
}

AddTopic.propTypes = {
  input: PropTypes.string,
  textarea: PropTypes.string,
}

const TitleInputStyled = styled.input`
  font-size: 16px;
  font-weight: 300;
  color: var(--primary-dark);
  width: 95%;
  height: 48px;
  border-radius: 8px;
  border: solid 1px var(--secondary-40);
  margin: 2px auto 20px auto;
  line-hight: 1.5em;
  padding: 12px;

  ::placeholder {
    color: var(--primary-light);
  }
`

const ContentInputStyled = styled.textarea`
  font-size: 16px;
  font-weight: 300;
  color: var(--primary-dark);
  width: 95%;
  height: 180px;
  border-radius: 8px;
  border: solid 1px var(--secondary-40);
  overflow-y: scroll;
  margin: 2px auto 0 auto;
  padding: 12px;

  ::placeholder {
    color: var(--primary-light);
  }
`
const FormStyled = styled.form`
  height: 100%;
`
const SmallTextStyled = styled.p`
  font-size: 14px;
`
const RequiredStyled = styled.span`
  color: red;
`
