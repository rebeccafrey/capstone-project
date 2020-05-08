import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { Divider } from '../components/Divider'
import Entries from '../components/Entries'
import Form from '../components/Form'
import { loadFromLocal, saveToLocal } from '../services'

export default function Topics() {
  const [entry, setEntry] = useState(
    loadFromLocal('entry') || [{ id: '', topic: '', description: '' }]
  )
  useEffect(() => {
    saveToLocal('entry', entry)
  }, [entry])

  return (
    <>
      <main>
        <TextStyled>
          Du warst bestimmt auch schon der Situation, dass dich das Verhalten
          anderer irritiert hat - oder du dich gefragt hast, ob du selbst etwas
          eigenartig bist?
        </TextStyled>
        <TextStyled>
          Ich habe das erklärte Ziel, den Austausch zu fördern - und DU bist ein
          essentieller Teil davon!
        </TextStyled>
        <TextStyled>
          Beschreibe unten kurz die Situationen, in denen du dich fremd gefühlt
          hast, die du mitbekommen hast, bei denen du nie verstanden hast, warum
          jemand eigentlich auf eine bestimmte Art und Weise reagiert!
        </TextStyled>
        <TextStyled>Und dann lasst uns reden!</TextStyled>
        <Divider />
        <Form addEntry={addEntry} />
        <Entries entry={entry} />
      </main>
    </>
  )
  function addEntry(newEntry) {
    setEntry([{ ...newEntry }, ...entry])
  }
}

const TextStyled = styled.p`
  margin-bottom: 24px;
`
