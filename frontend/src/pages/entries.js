import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Form from '../components/Form'
import { db } from '../Firebase'
import Divider from '../ui/Divider'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

EntriesList.propTypes = {
  setEntry: PropTypes.func,
}

export default function EntriesList() {
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
        <h2>Dein Beitrag</h2>
        <p>
          Ich habe das erklärte Ziel, den Austausch zu fördern - und{' '}
          <HighlightedText>
            DU bist ein essentieller Teil davon!
          </HighlightedText>
        </p>
        <p>
          Beschreibe unten kurz eine Situation, in der du dich vielleicht etwas
          fremd gefühlt hast oder in der du nicht ganz verstanden hast, warum
          jemand eigentlich auf eine bestimmte Art und Weise reagiert.
        </p>
        <p>
          <HighlightedText>Und dann lasst uns reden!</HighlightedText>
        </p>
        <Form addEntry={addEntry} />
        <Divider />
        <IntroTopicsStyled>
          Klick auf
          <NavLink to="/topics" data-testid="topics-link">
            <TopicsIconStyled alt="Link zur Themensammlung" />
          </NavLink>
          um alle Themen, die von dir und anderen eingetragen wurden, zu sehen.
        </IntroTopicsStyled>
        <SmallPrint>
          Du willst mehr Informationen? Schau <a href="/about">hier!</a>
        </SmallPrint>
      </main>
    </>
  )
  function addEntry(newEntry) {
    setEntry([{ ...newEntry }, ...entry])
  }
}

const IntroTopicsStyled = styled.p`
  font-style: italic;
  font-size: 14px;
`
const HighlightedText = styled.span`
  font-weight: 500;
`
const TopicsIconStyled = styled(AiOutlineUnorderedList)`
  fill: var(--secondary);
  margin: 0 8px -4px 8px;
  height: 16px;
`
const SmallPrint = styled.p`
  font-size: 14px;
  font-style: italic;
`
