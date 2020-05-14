import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Button from '../ui/Button/Button'
import Checkbox from '../ui/Checkbox/Checkbox'
import { db } from '../Firebase'

export default function AddTopic() {
  const [addedTopic, setAddedTopic] = useState('')
  const [entry, setEntry] = useState({
    topic: '',
    description: '',
  })
  const { topic, description } = entry
  const [agreement, setAgreement] = useState({ checked: false })
  const disabled =
    topic.length === 0 ||
    description.length === 0 ||
    agreement.checked === false

  return (
    <>
      <FormStyled onSubmit={addNewEntry} data-cy="submit-entry">
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
        <SmallPrint>
          <RequiredStyled>*</RequiredStyled>Pflichtfeld
        </SmallPrint>
        <AgreementStyled>
          <Checkbox
            type="checkbox"
            cy-data="agreement-checkbox"
            checked={agreement.checked}
            onChange={() => handleAgreement(agreement.id)}
          />
          Ich stimme zu, dass meine Einträge auch bei anderen Usern auftauchen!
        </AgreementStyled>
        <Button type="submit" disabled={disabled} data-cy="submit-button">
          Hinzufügen!
        </Button>
        {addedTopic}
      </FormStyled>
    </>
  )
  function updateTopicEntry(e) {
    setEntry({ ...entry, [e.target.name]: e.target.value })
  }

  function addNewEntry(e) {
    e.preventDefault()
    db.collection('discussion-topics').add(entry)
    setEntry({
      topic: '',
      description: '',
    })
    setAddedTopic(
      <SubmitTextStyled>Dein Thema wurde hinzugefügt!</SubmitTextStyled>
    )
  }

  function handleAgreement(id) {
    setAgreement((agreement) => {
      if (agreement.id === id) {
        return { checked: !agreement.checked }
      } else {
        return agreement
      }
    })
  }
}

AddTopic.propTypes = {
  entry: PropTypes.object,
  topic: PropTypes.string,
  description: PropTypes.string,
  updateTopicEntry: PropTypes.func,
  addNewEntry: PropTypes.func,
  handleAgreement: PropTypes.func,
  checked: PropTypes.bool,
}

const SubmitTextStyled = styled.p`
  margin-bottom: 24px;
  font-weight: 500;
`
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
const SmallPrint = styled.p`
  font-size: 14px;
`
const RequiredStyled = styled.span`
  color: red;
`
const AgreementStyled = styled.label`
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
  font-size: 16px;
`
