import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { db } from '../../Firebase'
import Button from '../Button'
import Checkbox from '../Checkbox/Checkbox'

export default function AddTopicsForm({ bookmarked }) {
  const [addedSubject, setAddedSubject] = useState('')
  const [subject, setSubject] = useState({
    topic: '',
    description: '',
    bookmarked: true,
  })
  const { topic, description } = subject
  const [agreement, setAgreement] = useState({ checked: false })
  const disabled =
    topic.length === 0 ||
    description.length === 0 ||
    agreement.checked === false

  return (
    <>
      <form onSubmit={addNewSubject} data-cy="submit-entry">
        <label htmlFor="topic">
          Vergib eine Überschrift:<RequiredStyled>*</RequiredStyled>
        </label>
        <TitleInputStyled
          className="input__style"
          id="topic"
          name="topic"
          type="text"
          placeholder="Titel"
          required
          onChange={updateTopicEntry}
          value={subject.topic}
        />
        <label htmlFor="description">
          Beschreibe kurz das Thema:<RequiredStyled>*</RequiredStyled>
        </label>
        <ContentInputStyled
          className="input__style"
          id="description"
          name="description"
          type="textarea"
          placeholder="Beschreibung"
          required
          onChange={updateTopicEntry}
          value={subject.description}
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
        <SubmitTextStyled>{addedSubject}</SubmitTextStyled>
      </form>
    </>
  )
  function updateTopicEntry(event) {
    setSubject({ ...subject, [event.target.name]: event.target.value })
  }

  function addNewSubject(event) {
    event.preventDefault()
    db.collection('discussion-topics')
      .add(subject)
      .catch((error) =>
        alert(
          'Oh, da ist etwas schief gegangen. Versuch es später noch einmal.',
          error
        )
      )
    setSubject({
      topic: '',
      description: '',
      bookmarked: true,
    })
    setAddedSubject('Dein Thema wurde hinzugefügt!')
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

const SubmitTextStyled = styled.p`
  margin-bottom: 24px;
  font-weight: 500;
`
const TitleInputStyled = styled.input`
  margin: 2px auto 20px auto;
`
const ContentInputStyled = styled.textarea`
  height: 180px;
  overflow-y: scroll;
  margin: 2px auto 0 auto;
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
