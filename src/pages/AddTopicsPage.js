import React from 'react'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import useAddToDatabase from '../services/useAddToDatabase'
import AddTopicsForm from '../ui/AddTopicsForm/AddTopicsForm'
import Divider from '../ui/Divider'

export default function AddTopicsPage() {
  const { subject, setSubject } = useAddToDatabase()

  return (
    <>
      <main>
        <h1>Dein Beitrag</h1>
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
        <AddTopicsForm addSubject={addSubject} />
        <Divider />
        <IntroTopicsStyled>
          Klick auf
          <NavLink to="/topics-all" data-testid="topics-link">
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
  function addSubject(newSubject) {
    setSubject([{ ...newSubject }, ...subject])
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
