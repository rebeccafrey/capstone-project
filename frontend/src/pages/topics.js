import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Entries from '../components/Entries'
import Form from '../components/Form'
import { db } from '../Firebase'
import Divider from '../ui/Divider'

export default function Topics() {
  const [entry, setEntry] = useState([])
  useEffect(() => {
    const discussionTopics = db
      .collection('discussion-topics')
      .onSnapshot((snapshot) => {
        const allTopics = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setEntry(allTopics)
      })
    return () => {
      discussionTopics()
    }
  }, [])

  return (
    <>
      <main>
        <p>
          Du warst bestimmt auch schon in Situationen, in denen dich das
          Verhalten anderer verwundert hat - oder du dich gefragt hast, ob du
          selbst etwas eigenartig bist?
        </p>
        <p>
          Ich habe das erklärte Ziel, den Austausch zu fördern - und{' '}
          <HighlightedText>
            DU bist ein essentieller Teil davon!
          </HighlightedText>
        </p>
        <p>
          Beschreibe unten kurz die Situationen, in denen du dich vielleicht
          etwas fremd gefühlt hast oder bei denen du nicht ganz verstanden hast,
          warum jemand eigentlich auf eine bestimmte Art und Weise reagiert.
          Gern kannst du auch weiter unten durch die schon vorhandenen Einträge
          gehen, um zu sehen, welche Themen andere beschäftigen.
        </p>
        <p>
          <HighlightedText>Und dann lasst uns reden!</HighlightedText>
        </p>
        <Form addEntry={addEntry} />
        <Divider />
        <IntroTopicsStyled>
          Untenstehend kannst du alle Themen, die von dir oder anderen
          eingetragen wurden, sehen. Klicke auf die Pfeile, um die
          Beschreibungen zu lesen.
        </IntroTopicsStyled>
        {entry.map((entry) => (
          <Entries entry={entry} />
        ))}
      </main>
    </>
  )
  function addEntry(newEntry) {
    setEntry([{ ...newEntry }, ...entry])
  }
}

Topics.propTypes = {
  setEntry: PropTypes.func,
}

const IntroTopicsStyled = styled.p`
  font-style: italic;
  font-size: 14px;
`
const HighlightedText = styled.span`
  font-weight: 500;
`
